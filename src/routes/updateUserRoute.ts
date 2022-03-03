import { Router } from "express";
import { UpdateUserController } from "../controllers/updateUserController";
import { authentication } from "../middlewares/authentication";
import { checkPermissionOrAdm } from "../middlewares/checkUserDelete";

const updateUserRoute = Router();

const updateUserController = new UpdateUserController();

updateUserRoute.patch("/:user_id", authentication, checkPermissionOrAdm, updateUserController.handle);

export default updateUserRoute;