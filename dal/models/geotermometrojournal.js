'use strict';
module.exports = (sequelize, DataTypes) => {
  const GeotermometroJournal = sequelize.define('GeotermometroJournal', {
    IPUser: DataTypes.STRING,
    cm2: DataTypes.FLOAT,
    cm5: DataTypes.FLOAT,
    cm10: DataTypes.FLOAT,
    cm20: DataTypes.FLOAT,
    cm30: DataTypes.FLOAT,
    cm50: DataTypes.FLOAT,
    cm100: DataTypes.FLOAT
  }, {});
  GeotermometroJournal.associate = function(models) {
    GeotermometroJournal.belongsTo(models.Usuario);
    GeotermometroJournal.belongsTo(models.Geotermometro);
  };
  return GeotermometroJournal;
};