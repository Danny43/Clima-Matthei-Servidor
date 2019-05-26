'use strict';
module.exports = (sequelize, DataTypes) => {
  const Geotermometro = sequelize.define('Geotermometro', {
    cm2: DataTypes.FLOAT,
    cm5: DataTypes.FLOAT,
    cm10: DataTypes.FLOAT,
    cm20: DataTypes.FLOAT,
    cm30: DataTypes.FLOAT,
    cm50: DataTypes.FLOAT,
    cm100: DataTypes.FLOAT
  }, {});
  Geotermometro.associate = function(models) {
    // associations can be defined here
  };
  return Geotermometro;
};