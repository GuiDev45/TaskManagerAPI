import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userService } from "../users/users.service.ts";

const JWT_SECRET = "super-secret"; // depois vai pra env

export const authService = {
  async login(email: string, password: string) {
    const user = userService.findByEmail(email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: "1h" });

    return token;
  },
};
