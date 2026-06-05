"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middleware/auth");
const errorHandler_1 = require("../middleware/errorHandler");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
exports.projectRoutes = router;
// 内存存储项目（生产环境应使用数据库）
const projects = new Map();
// 获取项目列表
router.get('/', auth_1.authenticate, (req, res) => {
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
router.get('/:id', auth_1.authenticate, (req, res) => {
    const projectId = req.params.id;
    const project = projects.get(projectId);
    if (!project || project.userId !== req.userId) {
        throw new errorHandler_1.ApiError('项目不存在', 404);
    }
    res.json({
        success: true,
        data: project,
    });
});
// 创建项目
router.post('/', auth_1.authenticate, [
    (0, express_validator_1.body)('title').notEmpty().withMessage('请输入项目标题'),
    (0, express_validator_1.body)('content').optional().isString(),
], (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new errorHandler_1.ApiError(errors.array()[0].msg, 400);
    }
    const { title, content = '' } = req.body;
    const projectId = (0, uuid_1.v4)();
    const project = {
        id: projectId,
        userId: req.userId,
        title,
        content,
        chapters: [],
        status: 'draft',
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    projects.set(projectId, project);
    res.status(201).json({
        success: true,
        data: project,
    });
});
// 更新项目
router.put('/:id', auth_1.authenticate, (req, res) => {
    const projectId = req.params.id;
    const project = projects.get(projectId);
    if (!project || project.userId !== req.userId) {
        throw new errorHandler_1.ApiError('项目不存在', 404);
    }
    const { title, content } = req.body;
    if (title)
        project.title = title;
    if (content !== undefined)
        project.content = content;
    project.updatedAt = new Date();
    res.json({
        success: true,
        data: project,
    });
});
// 删除项目
router.delete('/:id', auth_1.authenticate, (req, res) => {
    const projectId = req.params.id;
    const project = projects.get(projectId);
    if (!project || project.userId !== req.userId) {
        throw new errorHandler_1.ApiError('项目不存在', 404);
    }
    projects.delete(projectId);
    res.json({
        success: true,
        message: '项目已删除',
    });
});
// 添加章节
router.post('/:id/chapters', auth_1.authenticate, [
    (0, express_validator_1.body)('title').notEmpty().withMessage('请输入章节标题'),
    (0, express_validator_1.body)('content').notEmpty().withMessage('请输入章节内容'),
], (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new errorHandler_1.ApiError(errors.array()[0].msg, 400);
    }
    const projectId = req.params.id;
    const project = projects.get(projectId);
    if (!project || project.userId !== req.userId) {
        throw new errorHandler_1.ApiError('项目不存在', 404);
    }
    const { title, content } = req.body;
    const chapter = {
        id: (0, uuid_1.v4)(),
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
});
//# sourceMappingURL=projects.js.map