import { ApiError } from '../middleware/errorHandler';
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { streamText, type ToolSet } from 'ai';
import { z } from 'zod';

// AI 配置
export interface AIConfig {
  provider: 'openai' | 'claude' | 'deepseek';
  apiKey: string;
  model?: string;
}

// AI 响应接口（兼容旧接口）
export interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// Provider 工厂
function createProvider(config: AIConfig) {
  switch (config.provider) {
    case 'openai':
      return createOpenAI({
        apiKey: config.apiKey || process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL || undefined,
      });
    case 'claude':
      return createAnthropic({ apiKey: config.apiKey });
    case 'deepseek':
      return createOpenAI({
        apiKey: config.apiKey,
        baseURL: 'https://api.deepseek.com',
      });
    default:
      throw new ApiError(`不支持的AI提供商: ${config.provider}`, 400);
  }
}

// 获取默认模型名称
function getDefaultModel(provider: AIConfig['provider']): string {
  // 优先使用环境变量中的模型名
  if (process.env.MODEL_NAME) {
    return process.env.MODEL_NAME;
  }
  switch (provider) {
    case 'openai':
      return 'gpt-4';
    case 'claude':
      return 'claude-sonnet-4-20250514';
    case 'deepseek':
      return 'deepseek-chat';
    default:
      throw new ApiError(`不支持的AI提供商: ${provider}`, 400);
  }
}

/**
 * 流式文本生成
 * 返回 AsyncIterable，可逐 chunk 推送到 Socket.IO
 */
export function streamChat(config: AIConfig, systemPrompt: string, userMessage: string, tools?: ToolSet): any {
  if (!config.apiKey) {
    throw new ApiError('API Key未配置，请在设置中配置', 400);
  }

  const provider = createProvider(config);
  const model = config.model || getDefaultModel(config.provider);

  return streamText({
    model: provider(model),
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
    tools,
    temperature: 0.7,
    maxOutputTokens: 4000,
  });
}

/**
 * 非流式文本生成（兼容旧接口）
 */
export async function generateText(config: AIConfig, systemPrompt: string, userMessage: string): Promise<AIResponse> {
  if (!config.apiKey) {
    throw new ApiError('API Key未配置，请在设置中配置', 400);
  }

  const provider = createProvider(config);
  const model = config.model || getDefaultModel(config.provider);

  const { streamText: gt } = await import('ai');
  const result = await gt({
    model: provider(model),
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
    temperature: 0.7,
    maxOutputTokens: 4000,
  });

  const text = await result.text;
  return {
    content: text,
  };
}

// 转换提示词
const CONVERSION_PROMPT = `你是一位专业的剧本编剧。请将以下小说内容转换为标准剧本格式。

要求：
1. 识别场景变化，添加场景标题（INT./EXT. 地点 - 时间）
2. 提取角色对话，转换为剧本对话格式
3. 将动作描写转换为舞台指示（用括号括起来）
4. 保持故事的完整性和连贯性
5. 符合行业标准剧本格式

输出格式规则：
- 场景标题：居中，大写，格式为 "INT./EXT. 地点 - 时间"
- 角色名：居中，大写
- 对话：紧跟角色名下方
- 舞台指示：用括号括起来，描述动作和表情
- 场景之间用空行分隔

示例格式：

INT. 客厅 - 夜晚

李明坐在沙发上，看着窗外的雨。

李明
（叹气）
这雨什么时候才能停啊？

门铃响起。李明起身去开门。

EXT. 门口 - 夜晚

李明打开门，看到王小明站在门外。

王小明
李明，好久不见！

请转换以下内容：`;

/**
 * 统一AI调用接口（兼容旧接口）
 */
export async function convertNovelToScript(
  content: string,
  config: AIConfig
): Promise<AIResponse> {
  return generateText(config, CONVERSION_PROMPT, content);
}

/**
 * 获取默认AI配置
 */
export function getDefaultAIConfig(): AIConfig {
  return {
    provider: (process.env.AI_PROVIDER as AIConfig['provider']) || 'openai',
    apiKey: process.env.AI_API_KEY || '',
    model: process.env.AI_MODEL || undefined,
  };
}
