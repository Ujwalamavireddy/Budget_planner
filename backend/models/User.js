const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull:true },
  email: { type: DataTypes.STRING, allowNull:false, unique:true },
  password: { type: DataTypes.STRING, allowNull:false }
}, { sequelize, modelName: 'user' });

module.exports = User;
