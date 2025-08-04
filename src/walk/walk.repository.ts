import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WalkDTO } from './dto/walk.dto';

export class WalkRepository {
  constructor(@Inject(PrismaService) private readonly db: PrismaService) {}

  async createWalk(userId: number, date: Date): Promise<WalkDTO> {
    return this.db.walk.create({
      data: {
        userId,
        date,
      },
    });
  }

  async getWalkByDate(date: Date): Promise<WalkDTO | null> {
    return this.db.walk.findFirst({
      where: { date },
    });
  }

  async getAllWalks(): Promise<WalkDTO[]> {
    return this.db.walk.findMany({
      orderBy: { date: 'asc' },
    });
  }
}
