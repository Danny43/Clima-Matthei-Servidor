'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroHumedo = sequelize.define('TermometroHumedo', {
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroHumedo.associate = function(models) {
    // associations can be defined here
  };
  return TermometroHumedo;
};