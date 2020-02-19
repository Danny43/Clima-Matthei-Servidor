'use strict';
module.exports = (sequelize, DataTypes) => {
  const DireccionVientoJournal = sequelize.define('DireccionVientoJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  DireccionVientoJournal.associate = function(models) {
    DireccionVientoJournal.belongsTo(models.Usuario);
    DireccionVientoJournal.belongsTo(models.DireccionViento);
  };
  return DireccionVientoJournal;
};