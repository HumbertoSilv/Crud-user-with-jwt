import { Router } from "express";
import LoginUserController from "../controllers/loginUserController";

const loginUserRoute = Router();

const loginUser = new LoginUserController();

loginUserRoute.post("/", loginUser.handle);

export default loginUserRoute;