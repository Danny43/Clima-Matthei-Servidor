'use strict';
module.exports = (sequelize, DataTypes) => {
  const VisibilidadJournal = sequelize.define('VisibilidadJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  VisibilidadJournal.associate = function(models) {
    // associations can be defined here
  };
  return VisibilidadJournal;
};