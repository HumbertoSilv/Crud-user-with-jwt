import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/error";
import jwtConfig from "../configs/jwtConfig";
import { verify } from "jsonwebtoken";


interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
};

/**
 * Checks headers to authenticate a user.
 * @param request 
 * @param response 
 * @param next 
 */
export const authentication = (
    request: Request,
    response: Response,
    next: NextFunction) => {

    const headers = request.headers.authorization;

    if(!headers) throw new AppError(401, "Missing authorization headers.");

    try{
        const [_, token] = headers.split(" ");
        const { secret } = jwtConfig.jwt;

        const decoded = verify(token, secret);
        const { sub } = decoded as TokenPayload;
        
        request.user = {
            id: sub,
        };

        next();

    }catch(error){
        console.log(error);
        
        throw new AppError(400, "JWT expired or sended in a wrong way.")
    };
};