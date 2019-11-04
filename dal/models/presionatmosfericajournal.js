'use strict';
module.exports = (sequelize, DataTypes) => {
  const PresionAtmosfericaJournal = sequelize.define('PresionAtmosfericaJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  PresionAtmosfericaJournal.associate = function(models) {
    PresionAtmosfericaJournal.belongsTo(models.Usuario);
    PresionAtmosfericaJournal.belongsTo(models.PresionAtmosferica);
  };
  return PresionAtmosfericaJournal;
};