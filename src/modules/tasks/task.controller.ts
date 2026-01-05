import type { Request, Response } from "express";
import { taskService } from "./task.service.js";

export const taskController = {
  index(req: Request, res: Response) {
    const userId = req.user.id;

    const tasks = taskService.findAllByUser(userId);
    return res.json(tasks);
  },

  create(req: Request, res: Response) {
    const { title } = req.body;
    const userId = req.user.id;

    const task = taskService.create(title, userId);
    return res.status(201).json(task);
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user.id;

    try {
      const task = taskService.update(id, userId, req.body);
      return res.json(task);
    } catch (err) {
      return res.status(404).json({ message: (err as Error).message });
    }
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user.id;

    try {
      taskService.delete(id, userId);
      return res.status(204).send();
    } catch (err) {
      return res.status(404).json({ message: (err as Error).message });
    }
  },
};
