import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { handleError } from "./errors/error";
import router from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    handleError(error, response);
});

export default app;