import { Router } from "express";
import createUserRoute from "./createUserRoute";
import loginUserRoute from "./loginUserRoute";

const router = Router();

router.use("/user", createUserRoute);
router.use("/login", loginUserRoute);

export default router;