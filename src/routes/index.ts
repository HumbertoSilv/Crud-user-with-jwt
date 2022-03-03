import { Router } from "express";
import createUserRoute from "./createUserRoute";
import deleteUserRoute from "./deleteUserRoute";
import listUsersRoute from "./listUsersRoute";
import loginUserRoute from "./loginUserRoute";
import profileUserRoute from "./profileUserRoute";
import updateUserRoute from "./updateUserRoute";

const router = Router();

router.use("/users", createUserRoute);
router.use("/users", listUsersRoute);
router.use("/users", updateUserRoute);
router.use("/users", deleteUserRoute);
router.use("/users/profile", profileUserRoute);
router.use("/login", loginUserRoute);

export default router;