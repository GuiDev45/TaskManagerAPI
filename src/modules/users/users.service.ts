import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import type { User } from "./users.model.ts";

const users: User[] = [];

export const userService = {
  async create(name: string, email: string, password: string): Promise<User> {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user: User = {
      id: randomUUID(),
      name,
      email,
      passwordHash,
    };

    users.push(user);
    return user;
  },

  findByEmail(email: string): User | undefined {
    return users.find((u) => u.email === email);
  },
};
