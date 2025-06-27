import {UserRepository} from "./user.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService{
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async getRandomUser() {
        return this.userRepository.getRandomUser();
    }

    // async createUser(name: string, email: string) {
    //     return this.userRepository.createUser(name, email);
    // }
    //
    // async getAllUsers() {
    //     return this.userRepository.getAllUsers();
    // }
}