import { Module } from '@nestjs/common';
import {DebtController} from "./debt.controller";
import {DebtRepository} from "./debt.repository";
import {DebtService} from "./debt.service";
import {PrismaService} from "../prisma/prisma.service";
import {UserRepository} from "../user/user.repository";

@Module({
  controllers: [DebtController],
  providers: [DebtRepository, DebtService, PrismaService, UserRepository],
})
export class DebtModule {}
