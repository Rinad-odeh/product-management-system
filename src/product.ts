import { DataTypes, Model } from "sequelize";
import sequelize from "./db"; 

export class Product extends Model {}

Product.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
}, {
  sequelize,
  tableName: "products",
  timestamps: false,
});