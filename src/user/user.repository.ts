import {PrismaService} from "../prisma/prisma.service";
import {Inject} from "@nestjs/common";

export class UserRepository{
    constructor(
        @Inject(PrismaService) private readonly db: PrismaService
    ) {}

    async getRandomUser() {
        const users = await this.db.user.findMany();
        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
    }

    // async createUser(name: string, email: string) {
    //     return this.prismaService.user.create({
    //         data: { name, email },
    //     });
    // }

    // async getAllUsers() {
    //     return this.prismaService.user.findMany();
    // }
}