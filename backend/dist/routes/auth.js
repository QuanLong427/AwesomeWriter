"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_validator_1 = require("express-validator");
const errorHandler_1 = require("../middleware/errorHandler");
const router = (0, express_1.Router)();
exports.authRoutes = router;
// 内存存储用户（生产环境应使用数据库）
const users = new Map();
// 注册
router.post('/register', [
    (0, express_validator_1.body)('email').isEmail().withMessage('请提供有效的邮箱'),
    (0, express_validator_1.body)('username').isLength({ min: 2 }).withMessage('用户名至少2个字符'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('密码至少6个字符'),
], async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new errorHandler_1.ApiError(errors.array()[0].msg, 400);
    }
    const { email, username, password } = req.body;
    // 检查邮箱是否已存在
    for (const user of users.values()) {
        if (user.email === email) {
            throw new errorHandler_1.ApiError('邮箱已被注册', 400);
        }
    }
    // 创建用户
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const userId = Date.now().toString();
    const user = { id: userId, email, username, password: hashedPassword };
    users.set(userId, user);
    // 生成token
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET || 'default-secret', {
        expiresIn: '7d',
    });
    res.status(201).json({
        success: true,
        data: {
            user: { id: userId, email, username },
            token,
        },
    });
});
// 登录
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail().withMessage('请提供有效的邮箱'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('请输入密码'),
], async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new errorHandler_1.ApiError(errors.array()[0].msg, 400);
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
        throw new errorHandler_1.ApiError('邮箱或密码错误', 401);
    }
    // 验证密码
    const isPasswordValid = await bcryptjs_1.default.compare(password, foundUser.password);
    if (!isPasswordValid) {
        throw new errorHandler_1.ApiError('邮箱或密码错误', 401);
    }
    // 生成token
    const token = jsonwebtoken_1.default.sign({ userId: foundUser.id }, process.env.JWT_SECRET || 'default-secret', {
        expiresIn: '7d',
    });
    res.json({
        success: true,
        data: {
            user: { id: foundUser.id, email: foundUser.email, username: foundUser.username },
            token,
        },
    });
});
//# sourceMappingURL=auth.js.map