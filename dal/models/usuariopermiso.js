'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioPermiso = sequelize.define('UsuarioPermiso', {
    usuarioId: DataTypes.INTEGER,
    permisoId: DataTypes.INTEGER
  }, {});
  UsuarioPermiso.associate = function(models) {
    // associations can be defined here
  };
  return UsuarioPermiso;
};