import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password?: string;
  role: "USER" | "ADMIN" | "SUPER_ADMIN" | "SUPPORT";
  status: "active" | "suspended" | "deleted";
  permissions?: object; // JSON field for support permissions
  partnerId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id" | "role" | "status" | "permissions" | "partnerId"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public mobile!: string;
  public password!: string;
  public role!: "USER" | "ADMIN" | "SUPER_ADMIN" | "SUPPORT";
  public status!: "active" | "suspended" | "deleted";
  public permissions!: object;
  public partnerId!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mobile: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN", "SUPER_ADMIN", "SUPPORT"),
      defaultValue: "USER",
    },
    status: {
      type: DataTypes.ENUM("active", "suspended", "deleted"),
      defaultValue: "active",
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    partnerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "partners",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export default User;
