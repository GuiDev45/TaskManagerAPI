import type { Request, Response } from "express";
import { userService } from "./users.service.js";

export const userController = {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const user = await userService.create(name, email, password);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      return res.status(400).json({ message: (err as Error).message });
    }
  },
};
