'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temperatura = sequelize.define('Temperatura', {
    minima: DataTypes.FLOAT,
    maxima: DataTypes.FLOAT
  }, {});
  Temperatura.associate = function(models) {
    // associations can be defined here
  };
  return Temperatura;
};