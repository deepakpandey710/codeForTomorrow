'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('userTable',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      token:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      loggedInStatus:{
        type: Sequelize.BOOLEAN,
        allowNull:true,
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('userTable')
  }
};
