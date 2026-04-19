import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface SubscriptionAttributes {
  id: number;
  userId: number;
  planVersionId: number;
  pricePaid: number;
  status: "active" | "expired" | "cancelled";
  startDate: Date;
  endDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SubscriptionCreationAttributes extends Optional<SubscriptionAttributes, "id" | "status"> {}

class Subscription extends Model<SubscriptionAttributes, SubscriptionCreationAttributes> implements SubscriptionAttributes {
  public id!: number;
  public userId!: number;
  public planVersionId!: number;
  public pricePaid!: number;
  public status!: "active" | "expired" | "cancelled";
  public startDate!: Date;
  public endDate!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Subscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, // Assuming one active subscription per user for now
      references: {
        model: "users",
        key: "id",
      },
    },
    planVersionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "plan_versions",
        key: "id",
      },
    },
    pricePaid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "expired", "cancelled"),
      defaultValue: "active",
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "subscriptions",
    timestamps: true,
  }
);

export default Subscription;
