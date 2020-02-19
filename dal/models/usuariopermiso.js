'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioPermiso = sequelize.define('UsuarioPermiso', {
    
  }, {});
  UsuarioPermiso.associate = function(models) {
    UsuarioPermiso.belongsTo(models.Usuario);
    UsuarioPermiso.belongsTo(models.Permiso);
  };
  return UsuarioPermiso;
};