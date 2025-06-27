import { Module } from '@nestjs/common';
import {DebtController} from "./debt.controller";
import {DebtRepository} from "./debt.repository";
import {DebtService} from "./debt.service";
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [DebtController],
  providers: [DebtRepository, DebtService, PrismaService],
})
export class DebtModule {}
