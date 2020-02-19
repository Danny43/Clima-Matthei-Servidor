'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RegistroJournals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IPUser: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      agua_caida: {
        type: Sequelize.FLOAT
      },
      horas_sol: {
        type: Sequelize.FLOAT
      },
      evaporamiento: {
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
    return queryInterface.dropTable('RegistroJournals');
  }
};