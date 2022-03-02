import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";


export default class ProfileUserService {
    /**
     * Search user by ID passed as parameter
     * @param userId 
     * @returns 
     */
    async execute(userId: string) {
        const userRepository = getCustomRepository(UserRepository);

        const userProfile = await userRepository.findOne(userId);

        return userProfile;
    };
};