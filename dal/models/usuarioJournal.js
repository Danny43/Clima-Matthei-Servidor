'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuariosJournal = sequelize.define('UsuariosJournal', {
    IPUser: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  UsuariosJournal.associate = function(models) {
    UsuariosJournal.belongsTo(models.Usuario, {as: 'porUsuario', foreignKey: 'UsuarioId'});
    UsuariosJournal.belongsTo(models.Usuario);
  };
  return UsuariosJournal;
};