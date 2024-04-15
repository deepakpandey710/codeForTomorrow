const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db/index');
const Services = sequelize.define('services', {
  categoryId:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  type:{
    type: DataTypes.STRING,
    allowNull:false,
    values: ['Normal','VIP']
  },
  price:{
    type: [DataTypes.INTEGER],
  }
}, {
  sequelize,
  modelName: 'services',
  tableName: 'services',
  timestamps: true,
  updatedAt: 'updated',
  createdAt: 'created'
});

module.exports = Services;