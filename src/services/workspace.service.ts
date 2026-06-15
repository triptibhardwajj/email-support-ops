import { prisma } from '@/lib/prisma';
import { Workspace, Plan } from '@prisma/client';
import { ValidationError, NotFoundError } from '@/utils/errors';

export class WorkspaceService {
  async createWorkspace(data: {
    name: string;
    slug: string;
    ownerEmail: string;
    ownerName: string;
    phone?: string;
  }): Promise<Workspace> {
    // Check if slug is unique
    const existing = await prisma.workspace.findUnique({
      where: { slug: data.slug },
    });

    if (existing) {
      throw new ValidationError('Workspace slug already exists');
    }

    const workspace = await prisma.workspace.create({
      data: {
        name: data.name,
        slug: data.slug,
        ownerEmail: data.ownerEmail,
        ownerName: data.ownerName,
        phone: data.phone,
        plan: Plan.STARTER,
      },
    });

    return workspace;
  }

  async getWorkspace(id: string): Promise<Workspace> {
    const workspace = await prisma.workspace.findUnique({
      where: { id },
    });

    if (!workspace) {
      throw new NotFoundError('Workspace');
    }

    return workspace;
  }

  async updateWorkspace(
    id: string,
    data: Partial<Workspace>
  ): Promise<Workspace> {
    return prisma.workspace.update({
      where: { id },
      data,
    });
  }

  async getWorkspaceStats(workspaceId: string) {
    const [ticketCount, agentCount, memberCount, activeTickets] = await Promise.all([
      prisma.ticket.count({
        where: { workspaceId },
      }),
      prisma.agent.count({
        where: { workspaceId },
      }),
      prisma.member.count({
        where: { workspaceId },
      }),
      prisma.ticket.count({
        where: {
          workspaceId,
          status: { not: 'CLOSED' },
        },
      }),
    ]);

    return {
      ticketCount,
      agentCount,
      memberCount,
      activeTickets,
    };
  }
}

export const workspaceService = new WorkspaceService();
