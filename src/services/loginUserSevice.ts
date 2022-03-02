import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/error";
import { UserRepository } from "../repositories/userRepository";
import jwtConfig from "../configs/jwtConfig";
import { sign } from "jsonwebtoken";
import User from "../entities/UserEntity";


interface LoginRequest {
    username: string;
    password: string;
};

interface LoginResponse {
    user: User;
    token: string;
};

export default class LoginUserService {
    /**
     * If the user is valid, returns the user and an access token.
     * @param username
     * @param password
     * @returns Promise
     */
    async execute({username, password}: LoginRequest): Promise<LoginResponse> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({username});
        
        if(!user) throw new AppError(400, "User not found.");

        const validPassword = await compare(password, user.password);

        if(!validPassword) throw new AppError(403, "Incorrect password/email combination.");

        const { expiresIn, secret } = jwtConfig.jwt;

        const token = sign({}, secret, {
            subject: user.uuid,
            expiresIn
        });

        user.password = "xxxxxx";

        return {
            user,
            token
        };
    };
};