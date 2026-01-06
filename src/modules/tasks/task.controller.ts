import type { Request, Response } from "express";
import { taskService } from "./task.service.js";

export const taskController = {
  async index(req: Request, res: Response) {
    const userId = req.user.id; // injetado pelo middleware JWT
    const tasks = await taskService.findAll(userId);
    return res.json(tasks);
  },

  async create(req: Request, res: Response) {
    const userId = req.user.id;
    const { title, description } = req.body;

    const task = await taskService.create(userId, title, description);
    return res.status(201).json(task);
  },

  async update(req: Request, res: Response) {
    const userId = req.user.id;
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
      const task = await taskService.update(userId, id, {
        title,
        description,
        completed,
      });
      return res.json(task);
    } catch (err) {
      return res.status(404).json({ message: (err as Error).message });
    }
  },

  async delete(req: Request, res: Response) {
    const userId = req.user.id;
    const { id } = req.params;

    try {
      await taskService.delete(userId, id);
      return res.status(204).send();
    } catch (err) {
      return res.status(404).json({ message: (err as Error).message });
    }
  },
};
