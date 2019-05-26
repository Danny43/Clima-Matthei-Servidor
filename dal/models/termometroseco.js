'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroSeco = sequelize.define('TermometroSeco', {
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroSeco.associate = function(models) {
    // associations can be defined here
  };
  return TermometroSeco;
};