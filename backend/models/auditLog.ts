import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface AuditLogAttributes {
  id: number;
  adminId: number;
  action: string;
  target: string;
  targetId?: string;
  details?: object;
  ipAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AuditLogCreationAttributes extends Optional<AuditLogAttributes, "id" | "targetId" | "details" | "ipAddress"> {}

class AuditLog extends Model<AuditLogAttributes, AuditLogCreationAttributes> implements AuditLogAttributes {
  public id!: number;
  public adminId!: number;
  public action!: string;
  public target!: string;
  public targetId!: string;
  public details!: object;
  public ipAddress!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AuditLog.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false, // suspended_user, changed_pricing, etc.
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false, // users, plans, coupons
    },
    targetId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    details: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "audit_logs",
    timestamps: true,
  }
);

export default AuditLog;
