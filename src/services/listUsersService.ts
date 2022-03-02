import { getCustomRepository } from "typeorm";
import User from "../entities/UserEntity";
import { UserRepository } from "../repositories/userRepository";


export default class ListUsersService {
    /**
     * List all users.
     * @returns Promise<User[]>
     */
    async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        const allUsers = await userRepository.find();

        return allUsers;
    };
};