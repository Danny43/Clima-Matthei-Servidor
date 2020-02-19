'use strict';
module.exports = (sequelize, DataTypes) => {
  const NubosidadJournal = sequelize.define('NubosidadJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  NubosidadJournal.associate = function(models) {
    NubosidadJournal.belongsTo(models.Usuario);
    NubosidadJournal.belongsTo(models.Nubosidad);
  };
  return NubosidadJournal;
};