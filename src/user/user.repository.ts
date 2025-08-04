import {PrismaService} from "../prisma/prisma.service";
import {UserDTO} from "./dto/user.dto";

export class UserRepository {
    constructor(private readonly db: PrismaService) {}

    async getRandomUser(): Promise<UserDTO | null> {
        const count = await this.db.user.count();
        if (count === 0) {
            return null;
        }
        const skip = Math.floor(Math.random() * count);
        return this.db.user.findFirst({skip});
    }

    async getUserById(id: number): Promise<UserDTO | null> {
        return this.db.user.findUnique({
            where: {id},
        });
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
