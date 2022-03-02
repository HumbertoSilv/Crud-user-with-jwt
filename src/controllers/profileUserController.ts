import { Request, Response } from "express";
import ProfileUserService from "../services/profileUserService";


export default class ProfileUserController {
    /**
     * Run the ProfileUserService and handle the return.
     * @param request 
     * @param response 
     * @returns 
     */
    async handle(request: Request, response: Response) {
        const profileService = new ProfileUserService();

        const profile = await profileService.execute(request.user.id);

        return response.status(200).send(profile);
    };
};