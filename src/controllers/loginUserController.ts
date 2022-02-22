import { Request, Response } from "express";
import { AppError } from "../errors/error";
import LoginUserService from "../services/loginUserSevice";


export default class LoginUserController {
    /**
     * Pass the parameters to the service and handle the return.
     * @param request 
     * @param response 
     * @returns Promisse
     */
    async handle(request: Request, response: Response) {
        const login = new LoginUserService();

        await login.execute(request.body).then(
            res => {return response.status(200).send(res)}
        ).catch(
            (error: AppError) => {                
                return response.status(error.statusCode)
                .send({message: error.message});
            }
        );
    };
};