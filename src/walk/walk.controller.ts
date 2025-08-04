import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalkService } from './walk.service';

@Controller('walk')
export class WalkController {
  constructor(private readonly walkService: WalkService) {}

  @Post()
  async register(@Body() body: { userId: number; date: Date }) {
    return this.walkService.registerWalk(body.userId, body.date);
  }

  @Get('calendar')
  async calendar() {
    return this.walkService.getCalendar();
  }

  @Post('assign')
  async assign(
    @Body()
    body: { userId: number; dayOfWeek: number; startDate: Date; weeks: number },
  ) {
    return this.walkService.assignDays(
      body.userId,
      body.dayOfWeek,
      body.startDate,
      body.weeks,
    );
  }
}
