'use strict';
module.exports = (sequelize, DataTypes) => {
  const RegistrosJournal = sequelize.define('RegistrosJournal', {
    IPUser: DataTypes.STRING,
    fecha: DataTypes.DATE,
    agua_caida: DataTypes.FLOAT,
    horas_sol: DataTypes.FLOAT,
    evaporamiento: DataTypes.FLOAT
  }, {});
  RegistrosJournal.associate = function(models) {
    RegistrosJournal.belongsTo(models.Usuario);
    RegistrosJournal.belongsTo(models.Registro);
    
  };
  return RegistrosJournal;
};