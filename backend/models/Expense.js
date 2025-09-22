const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Expense extends Model {}
Expense.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull:false },
  amount: { type: DataTypes.FLOAT, allowNull:false },
  category: { type: DataTypes.STRING, allowNull:true },
  date: { type: DataTypes.DATEONLY, allowNull:false, defaultValue: DataTypes.NOW },
  note: { type: DataTypes.TEXT, allowNull:true }
}, { sequelize, modelName: 'expense' });

Expense.belongsTo(User, { foreignKey: 'userId', onDelete:'CASCADE' });
User.hasMany(Expense, { foreignKey: 'userId' });

module.exports = Expense;
