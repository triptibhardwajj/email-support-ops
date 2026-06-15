import { Router, Response } from 'express';
import { AuthRequest, authMiddleware } from '@/middleware/auth';
import { workspaceService } from '@/services/workspace.service';
import { z } from 'zod';

const router = Router();

const createWorkspaceSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  ownerEmail: z.string().email(),
  ownerName: z.string().min(1),
  phone: z.string().optional(),
});

router.post('/', async (req: AuthRequest, res: Response) => {
  const data = createWorkspaceSchema.parse(req.body);
  const workspace = await workspaceService.createWorkspace(data);
  res.status(201).json({ success: true, data: workspace });
});

router.get('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  const workspace = await workspaceService.getWorkspace(req.params.id);
  res.json({ success: true, data: workspace });
});

router.get('/:id/stats', authMiddleware, async (req: AuthRequest, res: Response) => {
  const stats = await workspaceService.getWorkspaceStats(req.params.id);
  res.json({ success: true, data: stats });
});

export default router;
