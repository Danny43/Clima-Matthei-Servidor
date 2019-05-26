'use strict';
module.exports = (sequelize, DataTypes) => {
  const PresionAtmosferica = sequelize.define('PresionAtmosferica', {
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  PresionAtmosferica.associate = function(models) {
    // associations can be defined here
  };
  return PresionAtmosferica;
};