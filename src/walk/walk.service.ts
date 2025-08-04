import { Injectable, NotFoundException } from '@nestjs/common';
import { WalkRepository } from './walk.repository';
import { UserRepository } from '../user/user.repository';
import { WalkDTO } from './dto/walk.dto';

@Injectable()
export class WalkService {
  constructor(
    private readonly walkRepository: WalkRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async registerWalk(userId: number, date: Date): Promise<WalkDTO> {
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.walkRepository.createWalk(userId, date);
  }

  async getCalendar(): Promise<WalkDTO[]> {
    return this.walkRepository.getAllWalks();
  }

  async assignDays(
    userId: number,
    dayOfWeek: number,
    startDate: Date,
    weeks: number,
  ): Promise<WalkDTO[]> {
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const assignments: WalkDTO[] = [];
    const first = new Date(startDate);
    while (first.getDay() !== dayOfWeek) {
      first.setDate(first.getDate() + 1);
    }
    for (let i = 0; i < weeks; i++) {
      const date = new Date(first);
      date.setDate(first.getDate() + i * 7);
      const walk = await this.walkRepository.createWalk(userId, date);
      assignments.push(walk);
    }
    return assignments;
  }
}
