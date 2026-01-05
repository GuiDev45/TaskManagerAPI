import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";
import { User } from "../users/users.model.js";

export class Task extends Model {
  declare id: string;
  declare title: string;
  declare completed: boolean;
  declare userId: string;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
  },
  {
    sequelize,
    tableName: "tasks",
  },
);

// relacionamento
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });
