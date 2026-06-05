import { useState, useEffect, useRef } from 'react';
import type { AgentMessage } from '../hooks/useSocket';

interface AgentMessageStreamProps {
  messages: AgentMessage[];
}

export function AgentMessageStream({ messages }: AgentMessageStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [thinkingText, setThinkingText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    for (const msg of messages) {
      if (msg.type === 'thinking') {
        setIsThinking(true);
        setThinkingText(msg.content || '');
      } else if (msg.type === 'thinking-complete') {
        setIsThinking(false);
      }
    }
  }, [messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, thinkingText]);

  if (messages.length === 0) return null;

  return (
    <div ref={containerRef} className="border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto bg-gray-50">
      {isThinking && (
        <div className="flex items-start gap-2 mb-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mt-0.5" />
          <div className="text-sm text-gray-600">
            <span className="font-medium text-blue-600">思考中...</span>
            {thinkingText && (
              <p className="mt-1 text-gray-500 whitespace-pre-wrap">{thinkingText}</p>
            )}
          </div>
        </div>
      )}

      {messages.map((msg, i) => {
        if (msg.type === 'thinking' || msg.type === 'thinking-complete') return null;

        if (msg.type === 'text-delta') {
          return (
            <div key={i} className="text-sm text-gray-800 whitespace-pre-wrap">
              {msg.content}
            </div>
          );
        }

        if (msg.type === 'tool-call') {
          return (
            <div key={i} className="flex items-center gap-2 text-xs text-purple-600 mb-1">
              <span className="px-1.5 py-0.5 bg-purple-100 rounded">工具</span>
              调用: {msg.toolName}
            </div>
          );
        }

        if (msg.type === 'error') {
          return (
            <div key={i} className="text-sm text-red-600 bg-red-50 p-2 rounded mt-2">
              错误: {msg.error}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
