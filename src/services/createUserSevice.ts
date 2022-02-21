import { hashSync } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";

interface UserRequest {
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
};

export class CreateUserService {
    async execute({username, password, email, isAdmin}: UserRequest) {
        
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