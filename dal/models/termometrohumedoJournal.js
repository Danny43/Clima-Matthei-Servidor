'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroHumedosJournal = sequelize.define('TermometroHumedosJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroHumedosJournal.associate = function(models) {
    TermometroHumedosJournal.belongsTo(models.Usuario);
    TermometroHumedosJournal.belongsTo(models.TermometroHumedo);
  };
  return TermometroHumedosJournal;
};