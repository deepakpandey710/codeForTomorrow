const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db/index');
const ServicePrice = sequelize.define('servicePrice', {
  
  serviceId:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  duration:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  price:{
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  modelName: 'servicePrice',
  tableName: 'servicePrice',
  timestamps: true,
  updatedAt: 'updated',
  createdAt: 'created'
});

module.exports = ServicePrice;