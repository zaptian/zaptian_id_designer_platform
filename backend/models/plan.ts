import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface PlanAttributes {
  id: number;
  name: string; // Basic, Pro, Enterprise
  description?: string;
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}

interface PlanCreationAttributes extends Optional<PlanAttributes, "id" | "status" | "description"> {}

class Plan extends Model<PlanAttributes, PlanCreationAttributes> implements PlanAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public status!: "active" | "inactive";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    sequelize,
    tableName: "plans",
    timestamps: true,
  }
);

export default Plan;
