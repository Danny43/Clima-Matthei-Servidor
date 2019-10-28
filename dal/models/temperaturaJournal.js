'use strict';
module.exports = (sequelize, DataTypes) => {
  const TemperaturasJournal = sequelize.define('TemperaturasJournal', {
    IPUser: DataTypes.STRING,
    minima: DataTypes.FLOAT,
    maxima: DataTypes.FLOAT
  }, {});
  TemperaturasJournal.associate = function(models) {
    TemperaturasJournal.belongsTo(models.Usuario);
    TemperaturasJournal.belongsTo(models.Temperatura);
  };
  return TemperaturasJournal;
};