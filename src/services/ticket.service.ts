import { prisma } from '@/lib/prisma';
import { Ticket, TicketStatus } from '@prisma/client';
import { NotFoundError, ValidationError } from '@/utils/errors';

export class TicketService {
  async getTickets(
    workspaceId: string,
    filters?: {
      status?: TicketStatus;
      categoryId?: string;
      assignedToId?: string;
      skip?: number;
      take?: number;
    }
  ) {
    const where: any = { workspaceId };

    if (filters?.status) where.status = filters.status;
    if (filters?.categoryId) where.categoryId = filters.categoryId;
    if (filters?.assignedToId) where.assignedToId = filters.assignedToId;

    const [tickets, total] = await Promise.all([
      prisma.ticket.findMany({
        where,
        include: {
          category: true,
          assignedTo: true,
          replies: true,
        },
        skip: filters?.skip || 0,
        take: filters?.take || 50,
        orderBy: { receivedAt: 'desc' },
      }),
      prisma.ticket.count({ where }),
    ]);

    return { tickets, total };
  }

  async getTicket(workspaceId: string, ticketId: string) {
    const ticket = await prisma.ticket.findFirst({
      where: { id: ticketId, workspaceId },
      include: {
        category: true,
        assignedTo: true,
        replies: {
          include: { agent: true },
          orderBy: { sentAt: 'asc' },
        },
        activityLogs: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!ticket) {
      throw new NotFoundError('Ticket');
    }

    return ticket;
  }

  async assignTicket(
    workspaceId: string,
    ticketId: string,
    agentId: string
  ) {
    const ticket = await prisma.ticket.findFirst({
      where: { id: ticketId, workspaceId },
    });

    if (!ticket) {
      throw new NotFoundError('Ticket');
    }

    const agent = await prisma.agent.findFirst({
      where: { id: agentId, workspaceId },
    });

    if (!agent) {
      throw new NotFoundError('Agent');
    }

    return prisma.ticket.update({
      where: { id: ticketId },
      data: { assignedToId: agentId },
    });
  }

  async updateTicketStatus(
    workspaceId: string,
    ticketId: string,
    status: TicketStatus
  ) {
    const ticket = await prisma.ticket.findFirst({
      where: { id: ticketId, workspaceId },
    });

    if (!ticket) {
      throw new NotFoundError('Ticket');
    }

    return prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status,
        resolvedAt: status === 'RESOLVED' ? new Date() : null,
      },
    });
  }
}

export const ticketService = new TicketService();
