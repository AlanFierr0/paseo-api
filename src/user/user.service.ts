import {UserRepository} from "./user.repository";
import {Injectable, NotFoundException} from "@nestjs/common";
import {UserDTO} from "./dto/user.dto";

@Injectable()
export class UserService{
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async getRandomUser() {
        return this.userRepository.getRandomUser();
    }

    async getUserById(id: number): Promise<UserDTO | null> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    // async createUser(name: string, email: string) {
    //     return this.userRepository.createUser(name, email);
    // }
    //
    // async getAllUsers() {
    //     return this.userRepository.getAllUsers();
    // }
}