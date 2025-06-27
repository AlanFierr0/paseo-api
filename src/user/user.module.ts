import { Module } from '@nestjs/common';

import {PrismaService} from "../prisma/prisma.service";
import {UserController} from "./user.controller";
import {UserRepository} from "./user.repository";
import {UserService} from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserRepository, UserService, PrismaService],
})
export class UserModule {}
