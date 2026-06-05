import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    userId?: string;
}
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map