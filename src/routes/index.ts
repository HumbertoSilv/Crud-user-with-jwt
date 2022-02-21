import { Router } from "express";
import createUserRoute from "./createUserRoute";

const router = Router();

router.use("/user", createUserRoute);

export default router;