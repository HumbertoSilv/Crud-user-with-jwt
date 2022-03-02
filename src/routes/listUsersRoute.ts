import { Router } from "express";
import ListUsersController from "../controllers/listUsersController";
import { admVerify } from "../middlewares/admVerify";
import { authentication } from "../middlewares/authentication";

const listUsersRoute = Router();

const listUsers = new ListUsersController();

listUsersRoute.get("/", authentication, admVerify, listUsers.handle);

export default listUsersRoute;