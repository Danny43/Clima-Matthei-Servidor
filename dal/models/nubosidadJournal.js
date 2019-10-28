'use strict';
module.exports = (sequelize, DataTypes) => {
  const NubosidadsJournal = sequelize.define('NubosidadsJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  NubosidadsJournal.associate = function(models) {
    NubosidadsJournal.belongsTo(models.Usuario);
    NubosidadsJournal.belongsTo(models.Nubosidad);
  };
  return NubosidadsJournal;
};