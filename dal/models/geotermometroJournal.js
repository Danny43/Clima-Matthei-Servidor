'use strict';
module.exports = (sequelize, DataTypes) => {
  const GeotermometrosJournal = sequelize.define('GeotermometrosJournal', {
    IPUser: DataTypes.STRING,
    cm2: DataTypes.FLOAT,
    cm5: DataTypes.FLOAT,
    cm10: DataTypes.FLOAT,
    cm20: DataTypes.FLOAT,
    cm30: DataTypes.FLOAT,
    cm50: DataTypes.FLOAT,
    cm100: DataTypes.FLOAT
  }, {});
  GeotermometrosJournal.associate = function(models) {
    GeotermometrosJournal.belongsTo(models.Usuario);
    GeotermometrosJournal.belongsTo(models.Geotermometro);
  };
  return GeotermometrosJournal;
};