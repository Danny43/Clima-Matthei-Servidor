'use strict';
module.exports = (sequelize, DataTypes) => {
  const VisibilidadsJournal = sequelize.define('VisibilidadsJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  VisibilidadsJournal.associate = function(models) {
    VisibilidadsJournal.belongsTo(models.Usuairo);
    VisibilidadsJournal.belongsTo(models.Visibilidad);
  };
  return VisibilidadsJournal;
};