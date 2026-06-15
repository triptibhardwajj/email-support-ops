import { Router, Response } from 'express';
import { AuthRequest, authMiddleware } from '@/middleware/auth';
import { analyticsService } from '@/services/analytics.service';

const router = Router();

router.use(authMiddleware);

router.get('/metrics', async (req: AuthRequest, res: Response) => {
  const from = req.query.from ? new Date(req.query.from as string) : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const to = req.query.to ? new Date(req.query.to as string) : new Date();

  const metrics = await analyticsService.getTicketMetrics(req.workspaceId!, {
    from,
    to,
  });

  res.json({ success: true, data: metrics });
});

router.get('/agent-performance', async (req: AuthRequest, res: Response) => {
  const performance = await analyticsService.getAgentPerformance(req.workspaceId!);
  res.json({ success: true, data: performance });
});

router.get('/category-breakdown', async (req: AuthRequest, res: Response) => {
  const breakdown = await analyticsService.getCategoryBreakdown(req.workspaceId!);
  res.json({ success: true, data: breakdown });
});

router.get('/status-distribution', async (req: AuthRequest, res: Response) => {
  const distribution = await analyticsService.getStatusDistribution(req.workspaceId!);
  res.json({ success: true, data: distribution });
});

export default router;
