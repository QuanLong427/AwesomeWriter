# AI小说转剧本工具

一款基于AI的网络小说转剧本Web应用，帮助网文作者将小说内容转换为标准剧本格式。

## 功能特性

- **智能格式转换**：AI自动识别场景、对话、动作，转换为标准剧本格式
- **多AI支持**：支持OpenAI GPT-4和Claude API
- **文件上传**：支持.txt和.md文件上传
- **在线编辑**：实时预览转换结果
- **导出功能**：支持TXT格式导出
- **角色管理**：自动识别和管理角色信息

## 技术栈

### 前端
- React 18 + TypeScript
- Tailwind CSS
- Vite
- Zustand（状态管理）
- Axios（HTTP客户端）

### 后端
- Node.js + Express
- TypeScript
- Prisma（ORM）
- JWT（认证）
- PostgreSQL（数据库）

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd AwesomeWriter
```

### 2. 启动后端

```bash
cd backend
npm install
npm run dev
```

后端服务将运行在 http://localhost:3001

### 3. 启动前端

```bash
cd frontend
npm install
npm run dev
```

前端应用将运行在 http://localhost:5173

### 4. 配置AI

1. 打开应用，点击"设置"
2. 选择AI提供商（OpenAI或Claude）
3. 输入API Key
4. 保存设置

## 使用方法

1. 在首页点击"开始转换"
2. 在左侧输入小说内容或上传文件
3. 点击"开始转换"按钮
4. 等待AI处理完成
5. 在右侧查看转换后的剧本
6. 可选择导出为TXT文件

## 项目结构

```
AwesomeWriter/
├── frontend/           # 前端React应用
│   ├── src/
│   │   ├── components/ # 组件
│   │   ├── lib/        # 工具函数
│   │   └── App.tsx     # 主应用
│   └── package.json
├── backend/            # 后端Node.js服务
│   ├── src/
│   │   ├── routes/     # API路由
│   │   ├── services/   # 业务逻辑
│   │   └── index.ts    # 入口文件
│   ├── prisma/         # 数据库Schema
│   └── package.json
└── README.md
```

## 环境变量

后端 `.env` 文件：

```env
# 服务器配置
PORT=3001
CORS_ORIGIN=http://localhost:5173

# JWT配置
JWT_SECRET=your-secret-key

# 数据库配置
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# AI配置（可选，也可在前端设置）
AI_PROVIDER=openai
AI_API_KEY=your-api-key
AI_MODEL=gpt-4
```

## 开发说明

- 使用 `npm run dev` 启动开发服务器
- 后端支持热重载
- 前端使用Vite的HMR功能

## 注意事项

- API Key仅存储在本地浏览器中，不会上传到服务器
- 建议使用环境变量配置敏感信息
- 生产环境请配置HTTPS
