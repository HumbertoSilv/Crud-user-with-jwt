import { Response } from "express";

/**
 * Class for handling generic errors.
 */
export class AppError extends Error {

    public readonly message: string;
    public readonly statusCode: number;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    };
};


export const handleError = (error: any, response: Response) => {
    const {statusCode, message} = error;

    if(error instanceof AppError) {
        return response.status(statusCode).json({
            status: "Error",
            statusCode,
            message
        });
    };

    console.log(error);
    
    return response.status(500).json({
        status: "Internal server error.",
        statusCode,
        message
    });
};
