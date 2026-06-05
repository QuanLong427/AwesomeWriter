"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../middleware/auth");
const errorHandler_1 = require("../middleware/errorHandler");
const router = (0, express_1.Router)();
exports.convertRoutes = router;
// AI转换提示词
const CONVERSION_PROMPT = `你是一位专业的剧本编剧。请将以下小说内容转换为标准剧本格式。

要求：
1. 识别场景变化，添加场景标题（INT./EXT. 地点 - 时间）
2. 提取角色对话，转换为剧本对话格式
3. 将动作描写转换为舞台指示
4. 保持故事的完整性和连贯性
5. 符合行业标准剧本格式

输出格式：
- 场景标题：居中，大写
- 角色名：居中，大写
- 对话：标准剧本格式
- 舞台指示：括号内

请转换以下内容：
`;
// 内存存储转换任务
const conversionJobs = new Map();
// 模拟AI转换（生产环境应调用实际AI API）
const mockAIConversion = async (content) => {
    // 模拟处理延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    // 简单的格式转换示例
    const lines = content.split('\n').filter(line => line.trim());
    let result = '';
    let sceneCount = 1;
    for (const line of lines) {
        const trimmed = line.trim();
        // 检测对话（简单的规则）
        if (trimmed.startsWith('"') || trimmed.startsWith('"') || trimmed.startsWith('「')) {
            // 提取角色名和对话内容
            const dialogueMatch = trimmed.match(/^[""「]?(.+?)[""」]?[:：](.+)/);
            if (dialogueMatch) {
                result += `\n${dialogueMatch[1].toUpperCase()}\n\n${dialogueMatch[2].trim()}\n`;
            }
            else {
                result += `\n角色\n\n${trimmed}\n`;
            }
        }
        // 检测场景描述
        else if (trimmed.includes('场景') || trimmed.includes('地点') || trimmed.includes('时间')) {
            result += `\n\n场景 ${sceneCount}\n${trimmed.toUpperCase()}\n\n`;
            sceneCount++;
        }
        // 动作描述
        else if (trimmed.length > 10) {
            result += `\n(${trimmed})\n`;
        }
    }
    return result || '（无法解析内容，请检查格式）';
};
// 开始转换
router.post('/', auth_1.authenticate, [
    (0, express_validator_1.body)('content').notEmpty().withMessage('请输入要转换的内容'),
], async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new errorHandler_1.ApiError(errors.array()[0].msg, 400);
    }
    const { content } = req.body;
    const jobId = Date.now().toString();
    // 创建转换任务
    const job = {
        id: jobId,
        userId: req.userId,
        status: 'processing',
        input: content,
        createdAt: new Date(),
    };
    conversionJobs.set(jobId, job);
    // 异步处理转换
    mockAIConversion(content)
        .then(output => {
        job.status = 'completed';
        job.output = output;
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
});
// 查询转换状态
router.get('/:jobId', auth_1.authenticate, (req, res) => {
    const jobId = req.params.jobId;
    const job = conversionJobs.get(jobId);
    if (!job || job.userId !== req.userId) {
        throw new errorHandler_1.ApiError('任务不存在', 404);
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
router.get('/', auth_1.authenticate, (req, res) => {
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
//# sourceMappingURL=convert.js.map