# AI小说转剧本工具

一款基于多Agent架构的网络小说转剧本Web应用，通过AI流水线将小说智能转换为专业剧本格式。

## 功能特性

- **多Agent流水线**：故事骨架 → 改编策略 → 剧本编写 → 监督审核
- **实时流式输出**：通过Socket.IO实时展示Agent思考和生成过程
- **多AI支持**：支持OpenAI、Claude、DeepSeek等模型
- **在线编辑**：所见即所得的剧本编辑器
- **导出功能**：支持TXT格式导出
- **角色管理**：自动识别和管理角色信息

## 技术栈

### 前端

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Socket.IO Client

### 后端

- Node.js + Express
- TypeScript
- Prisma（ORM）
- Vercel AI SDK（统一AI接口）
- Socket.IO（实时通信）
- MySQL（数据库）

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd AwesomeWriter
```

### 2. 配置环境变量

```bash
cd backend
cp .env.example .env
# 编辑 .env 填入实际配置
# 敏感信息（API Key）写在 .env.local 中
```

### 3. 启动后端

```bash
cd backend
npm install
npx prisma migrate dev  # 初始化数据库
npm run dev
```

后端服务将运行在 http://localhost:3001

### 4. 启动前端

```bash
cd frontend
npm install
npm run dev
```

前端应用将运行在 http://localhost:5173

## 架构设计

```
用户 (React 前端)
        │ Socket.IO (实时双向)
        ▼
决策层 Agent (orchestrator)
        │
  ┌─────┼─────┬─────────┐
  ▼     ▼     ▼         ▼
故事骨架 改编策略 剧本编写 监督审核
 Agent   Agent   Agent    Agent
```

每个Agent通过Vercel AI SDK调用AI模型，支持streaming输出和tool use。

## 环境变量

后端 `.env` 文件：

```env
# 数据库
DATABASE_URL=mysql://root:password@localhost:3306/awesomewriter

# AI配置
AI_PROVIDER=openai
AI_MODEL=

# 服务器
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

敏感信息（API Key）放在 `.env.local` 中：

```env
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
DEEPSEEK_API_KEY=sk-xxx
```

## 项目结构

```
AwesomeWriter/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AgentMessageStream.tsx  # Agent消息实时展示
│   │   │   ├── ScriptPreview.tsx       # 剧本预览
│   │   │   └── TextInput.tsx           # 文本输入
│   │   ├── hooks/
│   │   │   └── useSocket.ts            # Socket.IO Hook
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── agents/                     # Agent系统
│   │   │   ├── types.ts                # 类型定义
│   │   │   ├── orchestrator.ts         # 调度器
│   │   │   └── scriptAgent/
│   │   │       └── tools.ts            # Agent工具
│   │   ├── socket/                     # Socket.IO
│   │   │   ├── index.ts
│   │   │   └── routes/agent.ts
│   │   ├── services/
│   │   │   └── ai.ts                   # AI SDK封装
│   │   ├── routes/                     # REST API
│   │   └── index.ts
│   ├── prompts/                        # Agent提示词
│   │   └── script_agent_decision.md
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env.example
│   └── package.json
└── README.md
```

## 开发说明

- 使用 `npm run dev` 启动开发服务器
- 后端支持热重载
- 前端使用Vite的HMR功能
- 数据库变更后运行 `npx prisma migrate dev`

## 注意事项

- API Key仅存储在本地，不会上传到服务器
- `.env.local` 已在 `.gitignore` 中，不会被提交
- 生产环境请配置HTTPS
