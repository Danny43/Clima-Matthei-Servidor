'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroHumedoJournal = sequelize.define('TermometroHumedoJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroHumedoJournal.associate = function(models) {
    TermometroHumedoJournal.belongsTo(models.Usuario);
    TermometroHumedoJournal.belongsTo(models.TermometroHumedo);
  };
  return TermometroHumedoJournal;
};