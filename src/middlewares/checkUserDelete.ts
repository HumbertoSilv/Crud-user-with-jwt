import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/error";
import { UserRepository } from "../repositories/userRepository";


/**
 * Checks if the user is the owner of the account or an admin to delete it.
 * @param request 
 * @param response 
 * @param next 
 */
export const checkUserDelete = async (
    request: Request,
    response: Response,
    next: NextFunction) => {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(request.user.id);
    const urlId = await userRepository.findOne(request.params.user_id);

    if(!urlId) throw new AppError(404, "ID not found.");

    if(user?.uuid !== urlId.uuid && user?.isAdmin == false) {
        throw new AppError(403, "Admin only feature.");
    };
     
    next();
};
