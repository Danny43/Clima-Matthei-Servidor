'use strict';
module.exports = (sequelize, DataTypes) => {
  const DireccionViento = sequelize.define('DireccionViento', {
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  DireccionViento.associate = function(models) {
    // associations can be defined here
  };
  return DireccionViento;
};