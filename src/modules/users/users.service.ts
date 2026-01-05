import bcrypt from "bcryptjs";
import { User } from "./users.model.js";

export const userService = {
  async create(name: string, email: string, password: string) {
    const exists = await User.findOne({ where: { email } });
    if (exists) throw new Error("User already exists");

    const passwordHash = await bcrypt.hash(password, 8);

    return User.create({ name, email, passwordHash });
  },

  findByEmail(email: string) {
    return User.findOne({ where: { email } });
  },
};
