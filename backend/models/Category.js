const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db/index');
const Category = sequelize.define('category', {
    name:{
        type: DataTypes.STRING,
        allowNull:false,
      }
}, {
  sequelize,
  modelName: 'category',
  tableName: 'category',
  timestamps: true,
  updatedAt: 'updated',
  createdAt: 'created'
});

module.exports = Category;