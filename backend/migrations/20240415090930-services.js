'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('services',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      categoryId:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      type:{
        type: Sequelize.STRING,
        allowNull:false,
        values: ['Normal','VIP']
      },
      price:{
        type: [Sequelize.INTEGER],
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
    queryInterface.dropTable('services')
  }
};
