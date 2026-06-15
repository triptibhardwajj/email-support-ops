import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '@/config/env';
import { UnauthorizedError } from '@/utils/errors';

export interface AuthRequest extends Request {
  userId?: string;
  workspaceId?: string;
  role?: string;
}

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as any;
    return decoded;
  } catch (error) {
    throw new UnauthorizedError('Invalid or expired token');
  }
};

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    throw new UnauthorizedError('No authorization token provided');
  }

  const decoded = verifyToken(token);
  req.userId = decoded.userId;
  req.workspaceId = decoded.workspaceId;
  req.role = decoded.role;

  next();
};

export const generateToken = (userId: string, workspaceId: string, role: string) => {
  return jwt.sign(
    { userId, workspaceId, role },
    env.jwtSecret,
    { expiresIn: env.jwtExpiry }
  );
};
