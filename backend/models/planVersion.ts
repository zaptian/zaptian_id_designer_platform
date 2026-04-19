import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface PlanVersionAttributes {
  id: number;
  planId: number;
  price: number;
  billingCycle: "monthly" | "yearly";
  features?: object;
  isCurrent: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PlanVersionCreationAttributes extends Optional<PlanVersionAttributes, "id" | "isCurrent" | "features"> {}

class PlanVersion extends Model<PlanVersionAttributes, PlanVersionCreationAttributes> implements PlanVersionAttributes {
  public id!: number;
  public planId!: number;
  public price!: number;
  public billingCycle!: "monthly" | "yearly";
  public features!: object;
  public isCurrent!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PlanVersion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plans",
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    billingCycle: {
      type: DataTypes.ENUM("monthly", "yearly"),
      allowNull: false,
    },
    features: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    isCurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "plan_versions",
    timestamps: true,
  }
);

export default PlanVersion;
