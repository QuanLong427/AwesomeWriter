import { streamText } from 'ai';
import { AgentContext, AgentResult } from './types';
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import * as fs from 'fs/promises';
import * as path from 'path';

function createProvider(config: AgentContext['aiConfig']) {
  switch (config.provider) {
    case 'openai':
      return createOpenAI({ apiKey: config.apiKey });
    case 'claude':
      return createAnthropic({ apiKey: config.apiKey });
    case 'deepseek':
      return createOpenAI({
        apiKey: config.apiKey,
        baseURL: 'https://api.deepseek.com',
      });
    default:
      throw new Error(`不支持的AI提供商: ${config.provider}`);
  }
}

function getDefaultModel(provider: string): string {
  switch (provider) {
    case 'openai': return 'gpt-4';
    case 'claude': return 'claude-sonnet-4-20250514';
    case 'deepseek': return 'deepseek-chat';
    default: return 'gpt-4';
  }
}

/**
 * 加载提示词文件
 */
async function loadPrompt(filename: string): Promise<string> {
  const promptsDir = path.join(__dirname, '../../prompts');
  return fs.readFile(path.join(promptsDir, filename), 'utf-8');
}

/**
 * 注入上下文到提示词
 */
function injectContext(prompt: string, context: Record<string, string>): string {
  let result = prompt;
  for (const [key, value] of Object.entries(context)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }
  return result;
}

/**
 * 运行单个子 Agent
 */
export async function runSubAgent(
  ctx: AgentContext,
  promptFile: string,
  userMessage: string,
  context: Record<string, string> = {},
): Promise<AgentResult> {
  const systemPrompt = await loadPrompt(promptFile);
  const finalPrompt = injectContext(systemPrompt, context);

  const provider = createProvider(ctx.aiConfig);
  const model = ctx.aiConfig.model || getDefaultModel(ctx.aiConfig.provider);

  ctx.emitter.thinking(`正在执行子任务...`);

  const result = streamText({
    model: provider(model),
    system: finalPrompt,
    messages: [{ role: 'user', content: userMessage }],
    temperature: 0.7,
    maxOutputTokens: 4000,
  });

  let fullText = '';
  for await (const chunk of result.textStream) {
    fullText += chunk;
    ctx.emitter.textDelta(chunk);
  }

  ctx.emitter.thinkingComplete();
  ctx.emitter.complete();

  return { content: fullText, success: true };
}
