import { Router } from "express";
import { router as userRoutes } from "./modules/users/users.routes.js";
import { router as authRoutes } from "./modules/auth/auth.routes.js";
import { router as taskRoutes } from "./modules/tasks/task.routes.js";
import { authMiddleware } from "./shared/middlewares/auth.middleware.js";

const router = Router();

// rotas públicas
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

// rotas protegidas
router.use(authMiddleware);
router.use("/tasks", taskRoutes);

export { router };
