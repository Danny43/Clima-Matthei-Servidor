'use strict';
module.exports = (sequelize, DataTypes) => {
  const RegistroJournal = sequelize.define('RegistroJournal', {
    IPUser: DataTypes.STRING,
    fecha: DataTypes.DATE,
    agua_caida: DataTypes.FLOAT,
    horas_sol: DataTypes.FLOAT,
    evaporamiento: DataTypes.FLOAT
  }, {});
  RegistroJournal.associate = function(models) {
    // associations can be defined here
  };
  return RegistroJournal;
};