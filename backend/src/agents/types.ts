import { Socket } from 'socket.io';
import { AgentEmitter } from '../socket/routes/agent';
import { AIConfig } from '../services/ai';

export interface AgentContext {
  projectId: string;
  aiConfig: AIConfig;
  emitter: AgentEmitter;
  tools?: Record<string, unknown>;
}

export interface AgentResult {
  content: string;
  success: boolean;
  error?: string;
}
