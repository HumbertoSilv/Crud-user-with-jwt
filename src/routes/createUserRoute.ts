import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController";

const createUserRoute = Router();

const createUser = new CreateUserController();

createUserRoute.post("/", createUser.handle);

export default createUserRoute;