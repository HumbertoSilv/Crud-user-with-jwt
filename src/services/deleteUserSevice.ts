import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";


export default class DeleteUserService {
    /**
     * Deletes a user whose ID is passed as a parameter.
     * @param userId 
     * @returns 
     */
    async execute(userId: string) {
        const userRepository = getCustomRepository(UserRepository);

        await userRepository.delete(userId);

        return {
            message: "User deleted with success."
        };
    };
};