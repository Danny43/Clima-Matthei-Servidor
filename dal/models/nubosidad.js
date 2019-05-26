'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nubosidad = sequelize.define('Nubosidad', {
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  Nubosidad.associate = function(models) {
    // associations can be defined here
  };
  return Nubosidad;
};