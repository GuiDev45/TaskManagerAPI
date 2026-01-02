import type { Request, Response } from "express";
import { authService } from "./auth.service.js";

export const authController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await authService.login(email, password);
      return res.json({ token });
    } catch (err) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  },
};
