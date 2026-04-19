import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface CouponAttributes {
  id: number;
  code: string;
  discountType: "percentage" | "flat";
  discountValue: number;
  minSpend?: number;
  expiresAt?: Date;
  status: "active" | "inactive";
  maxUsage?: number;
  currentUsage: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CouponCreationAttributes extends Optional<CouponAttributes, "id" | "status" | "currentUsage" | "minSpend" | "expiresAt" | "maxUsage"> {}

class Coupon extends Model<CouponAttributes, CouponCreationAttributes> implements CouponAttributes {
  public id!: number;
  public code!: string;
  public discountType!: "percentage" | "flat";
  public discountValue!: number;
  public minSpend!: number;
  public expiresAt!: Date;
  public status!: "active" | "inactive";
  public maxUsage!: number;
  public currentUsage!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Coupon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    discountType: {
      type: DataTypes.ENUM("percentage", "flat"),
      allowNull: false,
    },
    discountValue: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    minSpend: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
    maxUsage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currentUsage: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "coupons",
    timestamps: true,
  }
);

export default Coupon;
