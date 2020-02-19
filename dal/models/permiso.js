'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permiso = sequelize.define('Permiso', {
    permiso: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  Permiso.associate = function(models) {
    // associations can be defined here
  };
  return Permiso;
};