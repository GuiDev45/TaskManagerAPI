import bcrypt from "bcryptjs";
import { User } from "./users.model.js";

export const userService = {
  async create(name: string, email: string, password: string) {
    // Checa se o usuário já existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      throw new Error("User already exists");
    }

    // Cria hash da senha
    const passwordHash = await bcrypt.hash(password, 8);

    // Cria o usuário no banco
    const user = await User.create({
      name,
      email,
      passwordHash,
    });

    return user;
  },

  async findByEmail(email: string) {
    return User.findOne({ where: { email } });
  },

  async findById(id: string) {
    return User.findByPk(id);
  },
};
