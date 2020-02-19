'use strict';
module.exports = (sequelize, DataTypes) => {
  const VisibilidadJournal = sequelize.define('VisibilidadJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  VisibilidadJournal.associate = function(models) {
    VisibilidadJournal.belongsTo(models.Usuario);
    VisibilidadJournal.belongsTo(models.Visibilidad);
  };
  return VisibilidadJournal;
};