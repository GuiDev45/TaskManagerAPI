import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class User extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare passwordHash: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password_hash",
    },
  },
  {
    sequelize,
    tableName: "users",
  },
);
