import { Router } from "express";
import DeleteUserController from "../controllers/deleteUserController";
import { authentication } from "../middlewares/authentication";
import { checkPermissionOrAdm } from "../middlewares/checkUserDelete";


const deleteUserRoute = Router();

const deleteUserController = new DeleteUserController();

deleteUserRoute.delete("/:user_id", authentication, checkPermissionOrAdm, deleteUserController.handle);

export default deleteUserRoute;