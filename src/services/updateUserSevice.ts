import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/error";
import { UserRepository } from "../repositories/userRepository";


interface DataRequest {
    username?: string;
    email?: string;
};


export class UpdateUserService {
    /**
     * Receives the user ID and an Object with the data to be updated,
     * updates and returns the updated user.
     * @param userId
     * @param data
     * @returns 
     */
    async execute(userId: string, data: DataRequest) {
        const userRepository = getCustomRepository(UserRepository);

        await userRepository.update(userId, data);

        const user = await userRepository.findOne(userId);
        
        if(!user) throw new AppError(400, "")
        
        user.password = "xxxxxxx";

        return user
    };
};