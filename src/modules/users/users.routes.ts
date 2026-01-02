import { Router } from "express";
import { userController } from "./users.controller.ts";

const router = Router();

router.post("/", userController.register);

export { router };
