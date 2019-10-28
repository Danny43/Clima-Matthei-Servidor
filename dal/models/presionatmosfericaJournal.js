'use strict';
module.exports = (sequelize, DataTypes) => {
  const PresionAtmosfericasJournal = sequelize.define('PresionAtmosfericasJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  PresionAtmosfericasJournal.associate = function(models) {
    PresionAtmosfericasJournal.belongsTo(models.Usuario);
    PresionAtmosfericasJournal.belongsTo(models.PresionAtmosferica);
  };
  return PresionAtmosfericasJournal;
};