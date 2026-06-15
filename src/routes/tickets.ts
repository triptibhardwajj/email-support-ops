import { Router, Response } from 'express';
import { AuthRequest, authMiddleware } from '@/middleware/auth';
import { ticketService } from '@/services/ticket.service';
import { TicketStatus } from '@prisma/client';

const router = Router();

router.use(authMiddleware);

router.get('/', async (req: AuthRequest, res: Response) => {
  const tickets = await ticketService.getTickets(req.workspaceId!, {
    status: req.query.status as TicketStatus,
    categoryId: req.query.categoryId as string,
    assignedToId: req.query.assignedToId as string,
    skip: parseInt(req.query.skip as string) || 0,
    take: parseInt(req.query.take as string) || 50,
  });
  res.json({ success: true, data: tickets });
});

router.get('/:id', async (req: AuthRequest, res: Response) => {
  const ticket = await ticketService.getTicket(req.workspaceId!, req.params.id);
  res.json({ success: true, data: ticket });
});

router.patch('/:id/assign', async (req: AuthRequest, res: Response) => {
  const { agentId } = req.body;
  const ticket = await ticketService.assignTicket(req.workspaceId!, req.params.id, agentId);
  res.json({ success: true, data: ticket });
});

router.patch('/:id/status', async (req: AuthRequest, res: Response) => {
  const { status } = req.body;
  const ticket = await ticketService.updateTicketStatus(req.workspaceId!, req.params.id, status);
  res.json({ success: true, data: ticket });
});

export default router;
