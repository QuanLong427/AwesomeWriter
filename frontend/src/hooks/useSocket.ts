import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

export type AgentMessageType =
  | 'thinking'
  | 'thinking-complete'
  | 'text-delta'
  | 'tool-call'
  | 'tool-result'
  | 'complete'
  | 'error';

export type AgentMessage = {
  type: AgentMessageType;
  content?: string;
  toolName?: string;
  toolArgs?: Record<string, unknown>;
  error?: string;
};

interface UseSocketOptions {
  projectId?: string;
  onMessage?: (msg: AgentMessage) => void;
}

export function useSocket({ projectId, onMessage }: UseSocketOptions = {}) {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:3001', {
      path: '/socket.io',
      transports: ['websocket', 'polling'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setConnected(true);
      if (projectId) {
        socket.emit('join-project', projectId);
      }
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    socket.on('agent:message', (msg: AgentMessage) => {
      onMessage?.(msg);
    });

    return () => {
      if (projectId) {
        socket.emit('leave-project', projectId);
      }
      socket.disconnect();
    };
  }, [projectId]);

  // 项目切换时重新加入房间
  useEffect(() => {
    if (socketRef.current?.connected && projectId) {
      socketRef.current.emit('join-project', projectId);
    }
  }, [projectId]);

  const emit = useCallback((event: string, data: unknown) => {
    socketRef.current?.emit(event, data);
  }, []);

  return { connected, emit, socket: socketRef };
}
