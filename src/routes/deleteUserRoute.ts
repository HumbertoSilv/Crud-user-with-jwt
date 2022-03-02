import { Router } from "express";
import DeleteUserController from "../controllers/deleteUserController";
import { authentication } from "../middlewares/authentication";
import { checkUserDelete } from "../middlewares/checkUserDelete";


const deleteUserRoute = Router();

const deleteUserController = new DeleteUserController();

deleteUserRoute.delete("/:user_id", authentication, checkUserDelete, deleteUserController.handle);

export default deleteUserRoute;