const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db/index');
const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token:{
    type: DataTypes.STRING,
    allowNull: true
  },
  loggedInStatus:{
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'userTable',
  timestamps: true,
  updatedAt: 'updated',
  createdAt: 'created'
});

module.exports = User;