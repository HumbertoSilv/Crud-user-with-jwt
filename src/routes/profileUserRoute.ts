import { Router } from "express";
import ProfileUserController from "../controllers/profileUserController";
import { authentication } from "../middlewares/authentication";

const profileUserRoute = Router();

const profileUser = new ProfileUserController();

profileUserRoute.get("/", authentication, profileUser.handle);

export default profileUserRoute;