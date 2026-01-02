import type { Request, Response } from "express";
import { taskService } from "./task.service.js";

export const taskController = {
  index(req: Request, res: Response) {
    const userId = req.userId;
    const tasks = taskService.findAll(userId);

    return res.json(tasks);
  },

  create(req: Request, res: Response) {
    const userId = req.userId;
    const { title, description } = req.body;

    const task = taskService.create(userId, {
      title,
      description,
    });

    return res.status(201).json(task);
  },

  update(req: Request, res: Response) {
    const userId = req.userId;
    const { id } = req.params;

    const task = taskService.update(userId, id, req.body);
    return res.json(task);
  },

  delete(req: Request, res: Response) {
    const userId = req.userId;
    const { id } = req.params;

    taskService.delete(userId, id);
    return res.status(204).send();
  },
};
