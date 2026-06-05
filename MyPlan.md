# AI 小说转剧本工具 — 实现计划

## 项目目标

将网络小说智能转换为专业剧本格式，采用多 Agent 流水线架构，分阶段处理：
**小说输入 → 故事骨架 → 改编策略 → 剧本编写 → 监督审核 → 成品输出**

---

## 技术栈选型

| 层级 | 选型 | 理由 |
|------|------|------|
| **前端** | React + Vite + TailwindCSS | 已有基础，保持不变 |
| **后端框架** | Express.js (已有) | 保持不变 |
| **实时通信** | Socket.IO | 替代 REST 轮询，支持 Agent 流式输出 |
| **AI SDK** | Vercel AI SDK (`ai`) | 统一多模型接口，原生支持 streaming + tool use |
| **AI 模型** | OpenAI / Claude / DeepSeek | 通过 AI SDK 统一适配 |
| **数据库** | PostgreSQL + Prisma | 已有基础，增加字段 |
| **向量存储** | 内存向量 (后续可扩展 pgvector) | Agent 记忆系统的 RAG 检索 |

---

## 架构设计

```
┌─────────────────────────────────────────────────────────────────────┐
│                          用户 (React 前端)                          │
│  输入小说 → 查看骨架 → 查看策略 → 查看剧本 → 审核确认               │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ Socket.IO (实时双向)
┌───────────────────────────────┴─────────────────────────────────────┐
│                     决策层 Agent (orchestrator)                     │
│  理解用户意图 → 拆解任务 → 按序调度执行层 → 管理状态                  │
└─────────┬──────────────┬──────────────┬──────────────┬─────────────┘
          │              │              │              │
    ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐
    │ 故事骨架   │  │ 改编策略   │  │ 剧本编写   │  │ 监督审核   │
    │ Agent     │  │ Agent     │  │ Agent     │  │ Agent     │
    └───────────┘  └───────────┘  └───────────┘  └───────────┘
          │              │              │              │
          └──────────────┴──────────────┴──────────────┘
                                │
                    ┌───────────┴───────────┐
                    │     记忆系统 (Memory)    │
                    │  RAG / 摘要 / 短期对话   │
                    └───────────────────────┘
```

---

## 实现阶段

### 阶段 1：Agent 基础设施 (地基)

**目标**：搭建 Agent 运行环境，实现第一个端到端可用的转换流程

**任务**：

1. **集成 Vercel AI SDK**
   - 安装 `ai`、`@ai-sdk/openai`、`@ai-sdk/anthropic`
   - 封装统一的 AI 调用层（支持 streaming、tool use）
   - 替换现有 `services/ai.ts` 的原生 fetch 实现

2. **搭建 Socket.IO 通信**
   - 后端集成 `socket.io`，建立 WebSocket 服务
   - 前端集成 `socket.io-client`
   - 实现 Agent 消息的实时推送（thinking、text、tool 调用）

3. **创建 Agent 框架**
   - 定义 Agent 基类/接口（决策层、执行层、监督层）
   - 实现 Agent 调度器（orchestrator）
   - 实现子 Agent 调用机制（tool-based sub-agent）

4. **提示词管理**
   - 创建 `prompts/` 目录，每个 Agent 独立 .md 文件
   - 支持动态注入上下文（项目信息、记忆、前序结果）

**产出**：
- 后端 `src/agents/` 目录结构
- Socket.IO 路由 `src/socket/`
- 前端实时消息展示组件

---

### 阶段 2：故事骨架 Agent

**目标**：将小说拆解为结构化的故事骨架

**任务**：

1. **故事骨架 Agent 实现**
   - 读取小说章节事件
   - 三幕结构分割（建制 → 对抗 → 解决）
   - 按项目配置分集
   - 设计每集钩子（hook）和情绪曲线

2. **数据模型扩展**
   - 增加 `StorySkeleton` 模型（存储骨架数据）
   - Chapter 模型增加 `event`、`eventState` 字段

3. **工具函数**
   - `get_novel_events` — 获取章节事件
   - `get_novel_text` — 获取章节原文
   - `write_skeleton` — 写入骨架结果

**产出**：
- `src/agents/scriptAgent/skeleton.ts`
- `prompts/script_execution_skeleton.md`
- Prisma schema 更新

---

### 阶段 3：改编策略 Agent

**目标**：基于故事骨架制定改编决策

**任务**：

1. **改编策略 Agent 实现**
   - 制定改编决策（保留/删减/新增）
   - 设计删减策略（哪些内容不适合影视化）
   - 规划节奏把控（每集时长、高潮分布）
   - 情感曲线设计

2. **工具函数**
   - `get_skeleton` — 获取故事骨架
   - `write_adaptation` — 写入改编策略

**产出**：
- `src/agents/scriptAgent/adaptation.ts`
- `prompts/script_execution_adaptation.md`

---

### 阶段 4：剧本编写 Agent

**目标**：基于骨架和策略生成标准格式剧本

**任务**：

1. **剧本编写 Agent 实现**
   - 读取故事骨架 + 改编策略
   - 生成标准剧本格式（场景标题、角色名、对话、舞台指示）
   - 支持按集/按章输出

2. **剧本格式化**
   - 标准剧本格式解析器
   - 支持导出为 txt / docx / pdf

3. **工具函数**
   - `get_skeleton` — 获取骨架
   - `get_adaptation` — 获取策略
   - `write_script` — 写入剧本

**产出**：
- `src/agents/scriptAgent/script.ts`
- `prompts/script_execution_script.md`
- `src/utils/scriptFormatter.ts`

---

### 阶段 5：监督层 Agent

**目标**：审核剧本质量，生成修改建议

**任务**：

1. **监督层 Agent 实现**
   - 审核执行层产出质量
   - 检查：角色一致性、情节连贯性、格式规范性
   - 生成审核报告（通过/需修改/严重问题）
   - 标记需要修改的具体位置

2. **审核报告**
   - 结构化审核结果（问题分类、严重程度、修改建议）
   - 支持用户确认后触发修改

**产出**：
- `src/agents/scriptAgent/supervision.ts`
- `prompts/script_agent_supervision.md`

---

### 阶段 6：前端流水线 UI

**目标**：可视化展示 Agent 流水线进度和各阶段结果

**任务**：

1. **流水线进度组件**
   - 实时展示当前阶段（骨架 → 策略 → 剧本 → 审核）
   - 每阶段状态：等待 / 进行中 / 完成 / 需修改
   - Agent thinking 过程实时展示

2. **结果查看器**
   - 故事骨架查看器（三幕结构可视化）
   - 改编策略查看器（决策列表）
   - 剧本预览器（标准格式渲染）
   - 审核报告查看器

3. **交互功能**
   - 用户确认/驳回各阶段结果
   - 驳回后触发重新生成
   - 手动编辑干预

**产出**：
- `src/components/PipelineProgress.tsx`
- `src/components/SkeletonViewer.tsx`
- `src/components/ScriptPreview.tsx` (升级)
- `src/components/ReviewReport.tsx`

---

### 阶段 7：记忆系统

**目标**：Agent 具备跨会话记忆能力

**任务**：

1. **记忆管理**
   - 短期记忆：当前对话上下文
   - 长期记忆：项目相关的关键信息
   - 摘要记忆：历史对话的压缩摘要

2. **RAG 检索**
   - 基于向量相似度检索相关记忆
   - 自动提取和存储关键信息

**产出**：
- `src/utils/agent/memory.ts`
- `src/utils/agent/rag.ts`

---

## 数据库变更

```prisma
// 新增：故事骨架模型
model StorySkeleton {
  id        String   @id @default(uuid())
  projectId String
  content   String   @db.Text  // JSON 格式的骨架数据
  createdAt DateTime @default(now())

  project Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
}

// 新增：改编策略模型
model AdaptationStrategy {
  id        String   @id @default(uuid())
  projectId String
  content   String   @db.Text  // JSON 格式的策略数据
  createdAt DateTime @default(now())

  project Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
}

// 修改：Chapter 增加字段
model Chapter {
  // ... 现有字段
  event      String?  @db.Text  // 章节事件摘要
  eventState String?  // 事件状态
}

// 修改：Project 增加配置字段
model Project {
  // ... 现有字段
  episodeCount Int?     // 目标集数
  episodeDuration Int?  // 每集时长（分钟）
  artStyle     String?  // 画风/视觉风格
  videoRatio   String?  @default("16:9")  // 视频画幅
}
```

---

## 目录结构（目标）

```
AwesomeWriter/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── prompts/                    # Agent 提示词
│   │   ├── script_agent_decision.md
│   │   ├── script_execution_skeleton.md
│   │   ├── script_execution_adaptation.md
│   │   ├── script_execution_script.md
│   │   └── script_agent_supervision.md
│   ├── src/
│   │   ├── agents/                 # Agent 系统
│   │   │   ├── scriptAgent/
│   │   │   │   ├── index.ts        # 决策层入口
│   │   │   │   ├── skeleton.ts     # 故事骨架
│   │   │   │   ├── adaptation.ts   # 改编策略
│   │   │   │   ├── script.ts       # 剧本编写
│   │   │   │   ├── supervision.ts  # 监督审核
│   │   │   │   └── tools.ts        # Agent 工具
│   │   │   └── orchestrator.ts     # 调度器
│   │   ├── socket/                 # Socket.IO
│   │   │   ├── index.ts
│   │   │   └── routes/
│   │   ├── services/
│   │   │   └── ai.ts              # AI SDK 封装
│   │   ├── utils/
│   │   │   ├── agent/
│   │   │   │   ├── memory.ts
│   │   │   │   └── rag.ts
│   │   │   └── scriptFormatter.ts
│   │   ├── routes/                 # REST API
│   │   └── middleware/
│   └── package.json
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── PipelineProgress.tsx
│       │   ├── SkeletonViewer.tsx
│       │   ├── ScriptPreview.tsx
│       │   └── ReviewReport.tsx
│       ├── hooks/
│       │   └── useSocket.ts
│       └── App.tsx
└── MyPlan.md
```

---

## 实施原则

1. **渐进式开发** — 每个阶段独立可运行，不破坏已有功能
2. **参考但不照搬** — 参考 ToonFlow 架构思路，技术实现用更现代的方案
3. **提示词驱动** — Agent 行为由外部 .md 文件控制，便于迭代优化
4. **实时优先** — 用 Socket.IO 替代 REST 轮询，提升用户体验
5. **AI SDK 统一** — 通过 Vercel AI SDK 屏蔽多模型差异
