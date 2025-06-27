import {UserService} from "./user.service";
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('random')
    async getRandomUser() {
       return this.userService.getRandomUser();
    }

    @Get('/info/:id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }
}