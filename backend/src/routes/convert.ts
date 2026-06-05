import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate, AuthRequest } from '../middleware/auth';
import { ApiError } from '../middleware/errorHandler';
import { convertNovelToScript, getDefaultAIConfig } from '../services/ai';

const router = Router();

// 内存存储转换任务
const conversionJobs: Map<string, {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  input: string;
  output?: string;
  error?: string;
  createdAt: Date;
  completedAt?: Date;
}> = new Map();

// 转换任务类型
interface ConversionJob {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  input: string;
  output?: string;
  error?: string;
  createdAt: Date;
  completedAt?: Date;
}

// 开始转换
router.post(
  '/',
  authenticate,
  [
    body('content').notEmpty().withMessage('请输入要转换的内容'),
  ],
  async (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(errors.array()[0].msg as string, 400);
    }

    const { content, aiConfig } = req.body;
    const jobId = Date.now().toString();

    // 创建转换任务
    const job: ConversionJob = {
      id: jobId,
      userId: req.userId!,
      status: 'processing',
      input: content,
      createdAt: new Date(),
    };

    conversionJobs.set(jobId, job);

    // 使用AI配置或默认配置
    const config = aiConfig || getDefaultAIConfig();

    // 异步处理转换
    convertNovelToScript(content, config)
      .then(result => {
        job.status = 'completed';
        job.output = result.content;
        job.completedAt = new Date();
      })
      .catch(error => {
        job.status = 'failed';
        job.error = error.message;
        job.completedAt = new Date();
      });

    res.status(202).json({
      success: true,
      data: {
        jobId,
        status: 'processing',
        message: '转换任务已创建，请稍候',
      },
    });
  }
);

// 查询转换状态
router.get('/:jobId', authenticate, (req: AuthRequest, res: Response) => {
  const jobId = req.params.jobId as string;
  const job = conversionJobs.get(jobId);

  if (!job || job.userId !== req.userId) {
    throw new ApiError('任务不存在', 404);
  }

  res.json({
    success: true,
    data: {
      id: job.id,
      status: job.status,
      input: job.input,
      output: job.output,
      error: job.error,
      createdAt: job.createdAt,
      completedAt: job.completedAt,
    },
  });
});

// 获取所有转换任务
router.get('/', authenticate, (req: AuthRequest, res: Response) => {
  const userJobs = Array.from(conversionJobs.values())
    .filter(job => job.userId === req.userId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .map(job => ({
      id: job.id,
      status: job.status,
      createdAt: job.createdAt,
      completedAt: job.completedAt,
    }));

  res.json({
    success: true,
    data: userJobs,
  });
});

export { router as convertRoutes };
