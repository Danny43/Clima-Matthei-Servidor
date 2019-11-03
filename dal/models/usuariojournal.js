'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioJournal = sequelize.define('UsuarioJournal', {
    IPUser: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  UsuarioJournal.associate = function(models) {
    UsuarioJournal.belongsTo(models.Usuario, {as: 'porUsuario', foreignKey: 'UsuarioId'});
    UsuarioJournal.belongsTo(models.Usuario);
  };
  return UsuarioJournal;
};
