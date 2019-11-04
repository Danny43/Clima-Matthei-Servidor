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
    RegistroJournal.belongsTo(models.Usuario);
    RegistroJournal.belongsTo(models.Registro);
  };
  return RegistroJournal;
};