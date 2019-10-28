'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroSecosJournal = sequelize.define('TermometroSecosJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroSecosJournal.associate = function(models) {
    TermometroSecosJournal.belongsTo(models.Usuario);
    TermometroSecosJournal.belongsTo(models.TermometroSeco);
  };
  return TermometroSecosJournal;
};