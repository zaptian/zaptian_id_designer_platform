import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface SystemSettingAttributes {
  id: number;
  key: string;
  value: string;
  section: string; // General, Payment, FeatureFlags
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SystemSettingCreationAttributes extends Optional<SystemSettingAttributes, "id" | "description"> {}

class SystemSetting extends Model<SystemSettingAttributes, SystemSettingCreationAttributes> implements SystemSettingAttributes {
  public id!: number;
  public key!: string;
  public value!: string;
  public section!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SystemSetting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "system_settings",
    timestamps: true,
  }
);

export default SystemSetting;
