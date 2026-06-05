import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate, AuthRequest } from '../middleware/auth';
import { ApiError } from '../middleware/errorHandler';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// 内存存储项目（生产环境应使用数据库）
const projects: Map<string, {
  id: string;
  userId: string;
  title: string;
  content: string;
  chapters: Array<{
    id: string;
    number: number;
    title: string;
    content: string;
    scenes: Array<{
      id: string;
      number: number;
      location: string;
      time: string;
      content: string;
      scriptFormat: string;
      characters: string[];
    }>;
  }>;
  status: 'draft' | 'processing' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}> = new Map();

// 获取项目列表
router.get('/', authenticate, (req: AuthRequest, res: Response) => {
  const userProjects = Array.from(projects.values())
    .filter(p => p.userId === req.userId)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  res.json({
    success: true,
    data: userProjects.map(p => ({
      id: p.id,
      title: p.title,
      status: p.status,
      chapterCount: p.chapters.length,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    })),
  });
});

// 获取项目详情
router.get('/:id', authenticate, (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;
  const project = projects.get(projectId);

  if (!project || project.userId !== req.userId) {
    throw new ApiError('项目不存在', 404);
  }

  res.json({
    success: true,
    data: project,
  });
});

// 创建项目
router.post(
  '/',
  authenticate,
  [
    body('title').notEmpty().withMessage('请输入项目标题'),
    body('content').optional().isString(),
  ],
  (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(errors.array()[0].msg as string, 400);
    }

    const { title, content = '' } = req.body;
    const projectId = uuidv4();

    const project = {
      id: projectId,
      userId: req.userId!,
      title,
      content,
      chapters: [],
      status: 'draft' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    projects.set(projectId, project);

    res.status(201).json({
      success: true,
      data: project,
    });
  }
);

// 更新项目
router.put('/:id', authenticate, (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;
  const project = projects.get(projectId);

  if (!project || project.userId !== req.userId) {
    throw new ApiError('项目不存在', 404);
  }

  const { title, content } = req.body;

  if (title) project.title = title;
  if (content !== undefined) project.content = content;
  project.updatedAt = new Date();

  res.json({
    success: true,
    data: project,
  });
});

// 删除项目
router.delete('/:id', authenticate, (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;
  const project = projects.get(projectId);

  if (!project || project.userId !== req.userId) {
    throw new ApiError('项目不存在', 404);
  }

  projects.delete(projectId);

  res.json({
    success: true,
    message: '项目已删除',
  });
});

// 添加章节
router.post(
  '/:id/chapters',
  authenticate,
  [
    body('title').notEmpty().withMessage('请输入章节标题'),
    body('content').notEmpty().withMessage('请输入章节内容'),
  ],
  (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(errors.array()[0].msg as string, 400);
    }

    const projectId = req.params.id as string;
    const project = projects.get(projectId);

    if (!project || project.userId !== req.userId) {
      throw new ApiError('项目不存在', 404);
    }

    const { title, content } = req.body;
    const chapter = {
      id: uuidv4(),
      number: project.chapters.length + 1,
      title,
      content,
      scenes: [],
    };

    project.chapters.push(chapter);
    project.updatedAt = new Date();

    res.status(201).json({
      success: true,
      data: chapter,
    });
  }
);

export { router as projectRoutes };
