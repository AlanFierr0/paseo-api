import { Module } from '@nestjs/common';
import { WalkController } from './walk.controller';
import { WalkService } from './walk.service';
import { WalkRepository } from './walk.repository';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from '../user/user.repository';

@Module({
  controllers: [WalkController],
  providers: [WalkService, WalkRepository, PrismaService, UserRepository],
})
export class WalkModule {}
