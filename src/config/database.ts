import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("taskmanager", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
