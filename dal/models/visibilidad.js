'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visibilidad = sequelize.define('Visibilidad', {
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  Visibilidad.associate = function(models) {
    // associations can be defined here
  };
  return Visibilidad;
};