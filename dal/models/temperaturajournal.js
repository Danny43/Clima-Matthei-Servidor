'use strict';
module.exports = (sequelize, DataTypes) => {
  const TemperaturaJournal = sequelize.define('TemperaturaJournal', {
    IPUser: DataTypes.STRING,
    minima: DataTypes.FLOAT,
    maxima: DataTypes.FLOAT
  }, {});
  TemperaturaJournal.associate = function(models) {
    TemperaturaJournal.belongsTo(models.Usuario);
    TemperaturaJournal.belongsTo(models.Temperatura);
  };
  return TemperaturaJournal;
};
