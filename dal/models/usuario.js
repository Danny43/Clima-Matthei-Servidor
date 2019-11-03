'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};