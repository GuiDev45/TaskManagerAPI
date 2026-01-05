import { sequelize } from "../config/database.js";

import "../modules/users/users.model.js";
import "../modules/tasks/task.model.js";

export async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection error", error);
  }
}
