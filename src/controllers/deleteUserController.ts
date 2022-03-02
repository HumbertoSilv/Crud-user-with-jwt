import { Request, Response } from "express";
import DeleteUserService from "../services/deleteUserSevice";


export default class DeleteUserController {
    /**
     * Run the DeleteUserService and handle the return.
     * @param request 
     * @param response 
     * @returns 
     */
    async handle(request: Request, response: Response) {
        const userId = request.params.user_id;
        const deleteUserService = new DeleteUserService();

        const message = await deleteUserService.execute(userId);

        return response.status(200).send(message);
    };
};