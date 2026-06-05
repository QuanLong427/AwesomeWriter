import { ApiError } from '../middleware/errorHandler';

// AI配置
interface AIConfig {
  provider: 'openai' | 'claude';
  apiKey: string;
  model?: string;
}

// AI响应接口
interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
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

请转换以下内容：
`;

// OpenAI API调用
async function callOpenAI(
  content: string,
  apiKey: string,
  model: string = 'gpt-4'
): Promise<AIResponse> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: CONVERSION_PROMPT },
        { role: 'user', content },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new ApiError(`OpenAI API error: ${error.error?.message || response.statusText}`, 500);
  }

  const data = await response.json();
  return {
    content: data.choices[0].message.content,
    usage: data.usage,
  };
}

// Claude API调用
async function callClaude(
  content: string,
  apiKey: string,
  model: string = 'claude-3-opus-20240229'
): Promise<AIResponse> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 4000,
      system: CONVERSION_PROMPT,
      messages: [
        { role: 'user', content },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new ApiError(`Claude API error: ${error.error?.message || response.statusText}`, 500);
  }

  const data = await response.json();
  return {
    content: data.content[0].text,
    usage: data.usage ? {
      promptTokens: data.usage.input_tokens,
      completionTokens: data.usage.output_tokens,
      totalTokens: data.usage.input_tokens + data.usage.output_tokens,
    } : undefined,
  };
}

// 统一AI调用接口
export async function convertNovelToScript(
  content: string,
  config: AIConfig
): Promise<AIResponse> {
  if (!config.apiKey) {
    throw new ApiError('API Key未配置，请在设置中配置', 400);
  }

  switch (config.provider) {
    case 'openai':
      return callOpenAI(content, config.apiKey, config.model);
    case 'claude':
      return callClaude(content, config.apiKey, config.model);
    default:
      throw new ApiError(`不支持的AI提供商: ${config.provider}`, 400);
  }
}

// 获取默认AI配置
export function getDefaultAIConfig(): AIConfig {
  return {
    provider: (process.env.AI_PROVIDER as 'openai' | 'claude') || 'openai',
    apiKey: process.env.AI_API_KEY || '',
    model: process.env.AI_MODEL || undefined,
  };
}
