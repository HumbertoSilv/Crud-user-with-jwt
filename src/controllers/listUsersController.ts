import { Request, Response } from "express";
import ListUsersService from "../services/listUsersService";


export default class ListUsersController {
    /**
     * Run the ListUserService and handle the return.
     * @param request 
     * @param response 
     * @returns 
     */
    async handle(request: Request, response: Response) {
        const usersListService = new ListUsersService();

        const usersList = await usersListService.execute();

        return response.status(200).send(usersList);
    };
};