import { Router } from "express";
import createUserRoute from "./createUserRoute";
import deleteUserRoute from "./deleteUserRoute";
import listUsersRoute from "./listUsersRoute";
import loginUserRoute from "./loginUserRoute";
import profileUserRoute from "./profileUserRoute";

const router = Router();

router.use("/users", createUserRoute);
router.use("/users", listUsersRoute);
router.use("/users/profile", profileUserRoute);
router.use("/users", deleteUserRoute)
router.use("/login", loginUserRoute);

export default router;