import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { ApiError } from '../middleware/errorHandler';

const router = Router();

// 内存存储用户（生产环境应使用数据库）
const users: Map<string, { id: string; email: string; username: string; password: string }> = new Map();

// 注册
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('请提供有效的邮箱'),
    body('username').isLength({ min: 2 }).withMessage('用户名至少2个字符'),
    body('password').isLength({ min: 6 }).withMessage('密码至少6个字符'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(errors.array()[0].msg as string, 400);
    }

    const { email, username, password } = req.body;

    // 检查邮箱是否已存在
    for (const user of users.values()) {
      if (user.email === email) {
        throw new ApiError('邮箱已被注册', 400);
      }
    }

    // 创建用户
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = Date.now().toString();
    const user = { id: userId, email, username, password: hashedPassword };
    users.set(userId, user);

    // 生成token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'default-secret', {
      expiresIn: '7d',
    });

    res.status(201).json({
      success: true,
      data: {
        user: { id: userId, email, username },
        token,
      },
    });
  }
);

// 登录
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('请提供有效的邮箱'),
    body('password').notEmpty().withMessage('请输入密码'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(errors.array()[0].msg as string, 400);
    }

    const { email, password } = req.body;

    // 查找用户
    let foundUser = null;
    for (const user of users.values()) {
      if (user.email === email) {
        foundUser = user;
        break;
      }
    }

    if (!foundUser) {
      throw new ApiError('邮箱或密码错误', 401);
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      throw new ApiError('邮箱或密码错误', 401);
    }

    // 生成token
    const token = jwt.sign({ userId: foundUser.id }, process.env.JWT_SECRET || 'default-secret', {
      expiresIn: '7d',
    });

    res.json({
      success: true,
      data: {
        user: { id: foundUser.id, email: foundUser.email, username: foundUser.username },
        token,
      },
    });
  }
);

export { router as authRoutes };
