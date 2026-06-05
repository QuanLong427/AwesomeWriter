import { Server } from 'socket.io';
import { streamChat, type AIConfig } from '../../services/ai';

// Agent 消息类型
export type AgentMessageType =
  | 'thinking'
  | 'thinking-complete'
  | 'text-delta'
  | 'tool-call'
  | 'tool-result'
  | 'complete'
  | 'error';

export interface AgentMessage {
  type: AgentMessageType;
  content?: string;
  toolName?: string;
  toolArgs?: Record<string, unknown>;
  error?: string;
}

/**
 * Agent 消息推送工具
 * 封装 Socket.IO 的 emit，供 Agent 调用
 */
export class AgentEmitter {
  constructor(
    private io: Server,
    private projectId: string,
  ) {}

  private emit(msg: AgentMessage) {
    this.io.to(`project:${this.projectId}`).emit('agent:message', msg);
  }

  thinking(content: string) {
    this.emit({ type: 'thinking', content });
  }

  thinkingComplete() {
    this.emit({ type: 'thinking-complete' });
  }

  textDelta(content: string) {
    this.emit({ type: 'text-delta', content });
  }

  toolCall(toolName: string, args: Record<string, unknown>) {
    this.emit({ type: 'tool-call', toolName, toolArgs: args });
  }

  toolResult(toolName: string, result: string) {
    this.emit({ type: 'tool-result', toolName, content: result });
  }

  complete() {
    this.emit({ type: 'complete' });
  }

  error(message: string) {
    this.emit({ type: 'error', error: message });
  }
}

/**
 * 设置 Agent Socket 事件处理
 */
export function setupAgentSocket(io: Server) {
  io.on('connection', (socket) => {
    // 客户端请求启动 Agent 转换
    socket.on('agent:start', async (data: { projectId: string; content: string; aiConfig: AIConfig }) => {
      const { projectId, content, aiConfig } = data;
      const emitter = new AgentEmitter(io, projectId);

      try {
        emitter.thinking('正在分析小说内容...');

        const result = await streamChat(
          aiConfig,
          '你是一位专业的剧本编剧。请将以下小说内容转换为标准剧本格式。',
          content,
        );

        // 流式推送文本
        for await (const chunk of result.textStream) {
          emitter.textDelta(chunk);
        }

        emitter.complete();
      } catch (err: any) {
        emitter.error(err.message || '转换失败');
      }
    });
  });
}
