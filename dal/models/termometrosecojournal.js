'use strict';
module.exports = (sequelize, DataTypes) => {
  const TermometroSecoJournal = sequelize.define('TermometroSecoJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.FLOAT,
    h1400: DataTypes.FLOAT,
    h1800: DataTypes.FLOAT
  }, {});
  TermometroSecoJournal.associate = function(models) {
    TermometroSecoJournal.belongsTo(models.Usuario);
    TermometroSecoJournal.belongsTo(models.TermometroSeco);
  };
  return TermometroSecoJournal;
};