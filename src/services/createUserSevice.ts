import { hashSync } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../entities/UserEntity";
import { UserRepository } from "../repositories/userRepository";


interface UserRequest {
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
};

export default class CreateUserService {
    /**
     * Create a user.
     * @param username - String
     * @param password - String
     * @param email - String
     * @param isAdmin - Boolean
     * 
     * @returns Promise<User>
     */
    async execute({username, password, email, isAdmin}: UserRequest): Promise<User> {
        
        const userRepository = getCustomRepository(UserRepository);

        const hashedPasword = hashSync(password, 8);

        const user = userRepository.create({
            username,
            email,
            isAdmin,
            password: hashedPasword
        });

        await userRepository.save(user);

        user.password = "xxxxxx";

        return user;
    };
};