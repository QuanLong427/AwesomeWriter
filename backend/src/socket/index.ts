import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { setupAgentSocket } from './routes/agent';

export function initSocket(httpServer: HttpServer): Server {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`[Socket] 客户端连接: ${socket.id}`);

    // 加入项目房间
    socket.on('join-project', (projectId: string) => {
      socket.join(`project:${projectId}`);
      console.log(`[Socket] ${socket.id} 加入项目: ${projectId}`);
    });

    // 离开项目房间
    socket.on('leave-project', (projectId: string) => {
      socket.leave(`project:${projectId}`);
      console.log(`[Socket] ${socket.id} 离开项目: ${projectId}`);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket] 客户端断开: ${socket.id}`);
    });
  });

  // 注册 Agent 相关事件
  setupAgentSocket(io);

  return io;
}
