import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/error";
import { UserRepository } from "../repositories/userRepository";


/**
 * Check if the user is admin.
 * @param request 
 * @param response 
 * @param next 
 */
export const admVerify = async (
    request: Request,
    response: Response,
    next: NextFunction): Promise<void> => {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(request.user.id);
     
    if(user?.isAdmin === false) throw new AppError(403, "Admin only feature.");

    next();
};