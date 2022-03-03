import { Request, Response } from "express";
import { AppError } from "../errors/error";
import { UpdateUserService } from "../services/updateUserSevice";

export class UpdateUserController {
    /**
     * Run the UpdateUserService and handle the return.
     * @param request 
     * @param response 
     */
    async handle(request: Request, response: Response) {
        const userId = request.user.id;
        const data = request.body;

        const updateUserService = new UpdateUserService();

        await updateUserService.execute(userId, data).then(
            resp => {return response.status(200).send(resp)}
        ).catch(
            (error: AppError) => {
                return response.status(error.statusCode).send(error.message)
            }
        );
    };
};