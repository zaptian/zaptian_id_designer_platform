import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db.js";

interface PartnerAttributes {
  id: number;
  name: string;
  type: string; // School, Training Center, etc.
  commissionRate: number;
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}

interface PartnerCreationAttributes extends Optional<PartnerAttributes, "id" | "status" | "commissionRate"> {}

class Partner extends Model<PartnerAttributes, PartnerCreationAttributes> implements PartnerAttributes {
  public id!: number;
  public name!: string;
  public type!: string;
  public commissionRate!: number;
  public status!: "active" | "inactive";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Partner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commissionRate: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    sequelize,
    tableName: "partners",
    timestamps: true,
  }
);

export default Partner;
