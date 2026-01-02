import { Router } from "express";
import { router as taskRoutes } from "./modules/tasks/task.routes.js";
import { fakeAuth } from "./shared/middlewares/auth.middleware.js";

const router = Router();

router.use(fakeAuth);
router.use("/tasks", taskRoutes);

export { router };
