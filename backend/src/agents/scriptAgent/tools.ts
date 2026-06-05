import { tool } from 'ai';
import { z } from 'zod';

// Prisma client will be injected via context
let prisma: any = null;

export function setPrismaClient(client: any) {
  prisma = client;
}

/**
 * 定义 Script Agent 可用的工具
 */
export function createScriptAgentTools(projectId: string) {
  return {
    get_novel_events: tool({
      description: '获取指定章节的事件摘要',
      inputSchema: z.object({
        chapterIndexs: z.array(z.number()).describe('章节编号列表'),
      }),
      execute: async ({ chapterIndexs }) => {
        const chapters = await prisma.chapter.findMany({
          where: {
            projectId,
            number: { in: chapterIndexs },
          },
          select: {
            number: true,
            title: true,
            content: true,
          },
          orderBy: { number: 'asc' },
        });

        return chapters
          .map((ch: { number: number; title: string }) => `第${ch.number}章，标题:${ch.title}`)
          .join('\n') || '无数据';
      },
    }),

    get_novel_text: tool({
      description: '获取指定章节的原始文本内容',
      inputSchema: z.object({
        chapterIndex: z.string().describe('章节编号'),
      }),
      execute: async ({ chapterIndex }) => {
        const chapter = await prisma.chapter.findFirst({
          where: {
            projectId,
            number: parseInt(chapterIndex),
          },
          select: { content: true },
        });

        return chapter?.content || '无数据';
      },
    }),

    get_plan_data: tool({
      description: '获取工作区数据（故事骨架、改编策略等）',
      inputSchema: z.object({
        key: z.enum(['storySkeleton', 'adaptationStrategy', 'script']).describe('数据key'),
      }),
      execute: async ({ key }) => {
        // TODO: 从数据库读取对应数据
        return '暂无数据';
      },
    }),
  };
}
