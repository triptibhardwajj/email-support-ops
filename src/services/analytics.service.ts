import { prisma } from '@/lib/prisma';
import { TicketStatus } from '@prisma/client';

export class AnalyticsService {
  async getTicketMetrics(workspaceId: string, dateRange: { from: Date; to: Date }) {
    const tickets = await prisma.ticket.findMany({
      where: {
        workspaceId,
        receivedAt: {
          gte: dateRange.from,
          lte: dateRange.to,
        },
      },
      include: { replies: true, assignedTo: true },
    });

    const totalTickets = tickets.length;
    const resolvedTickets = tickets.filter((t) => t.status === 'RESOLVED').length;
    const awaitingReply = tickets.filter((t) => t.status === 'AWAITING_AGENT_RESPONSE').length;
    const slaBreach = tickets.filter((t) => t.slaBreach).length;

    // Calculate average response time
    const responseTimes = tickets
      .filter((t) => t.firstReplyAt)
      .map((t) => {
        const diff = t.firstReplyAt!.getTime() - t.receivedAt.getTime();
        return Math.floor(diff / (1000 * 60)); // Convert to minutes
      });

    const avgResponseTime =
      responseTimes.length > 0
        ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
        : 0;

    return {
      totalTickets,
      resolvedTickets,
      resolutionRate: totalTickets > 0 ? Math.round((resolvedTickets / totalTickets) * 100) : 0,
      awaitingReply,
      slaBreach,
      avgResponseTime,
    };
  }

  async getAgentPerformance(workspaceId: string) {
    const agents = await prisma.agent.findMany({
      where: { workspaceId },
      include: {
        replies: true,
        tickets: true,
      },
    });

    return agents.map((agent) => ({
      id: agent.id,
      name: agent.name,
      email: agent.email,
      totalReplies: agent.replies.length,
      avgResponseTime: agent.avgResponseTime,
      slaBreaches: agent.slaBreaches,
      assignedTickets: agent.tickets.length,
    }));
  }

  async getCategoryBreakdown(workspaceId: string) {
    const categories = await prisma.category.findMany({
      where: { workspaceId },
      include: {
        tickets: true,
      },
    });

    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      ticketCount: cat.tickets.length,
      percentage: 0,
    }));
  }

  async getStatusDistribution(workspaceId: string) {
    const tickets = await prisma.ticket.findMany({
      where: { workspaceId },
      select: { status: true },
    });

    const distribution: Record<TicketStatus, number> = {
      AWAITING_FIRST_REPLY: 0,
      AWAITING_CUSTOMER_RESPONSE: 0,
      AWAITING_AGENT_RESPONSE: 0,
      RESOLVED: 0,
      CLOSED: 0,
      ON_HOLD: 0,
    };

    tickets.forEach((ticket) => {
      distribution[ticket.status]++;
    });

    return distribution;
  }
}

export const analyticsService = new AnalyticsService();
