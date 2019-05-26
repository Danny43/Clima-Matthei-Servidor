'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Geotermometros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cm2: {
        type: Sequelize.FLOAT
      },
      cm5: {
        type: Sequelize.FLOAT
      },
      cm10: {
        type: Sequelize.FLOAT
      },
      cm20: {
        type: Sequelize.FLOAT
      },
      cm30: {
        type: Sequelize.FLOAT
      },
      cm50: {
        type: Sequelize.FLOAT
      },
      cm100: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Geotermometros');
  }
};