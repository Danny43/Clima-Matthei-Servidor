'use strict';
module.exports = (sequelize, DataTypes) => {
  const DireccionVientosJournal = sequelize.define('DireccionVientosJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  DireccionVientosJournal.associate = function(models) {
    DireccionVientosJournal.belongsTo(models.Usuario);
    DireccionVientosJournal.belongsTo(models.DireccionViento);
  };
  return DireccionVientosJournal;
};