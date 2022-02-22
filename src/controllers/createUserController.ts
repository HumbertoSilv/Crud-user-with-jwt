import { Request, Response } from "express";
import CreateUserService from "../services/createUserSevice";


export class CreateUserController {
    async handle(request: Request, response: Response) {
        const createuser = new CreateUserService();

        await createuser.execute(request.body).then(
            res => {return response.status(201).send(res)}
        ).catch(
            error => {
                console.log(error);                
                return response.status(400).send(error)}
        );
    };
};