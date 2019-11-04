'use strict';
module.exports = (sequelize, DataTypes) => {
  const NubosidadJournal = sequelize.define('NubosidadJournal', {
    IPUser: DataTypes.STRING,
    h0830: DataTypes.INTEGER,
    h1400: DataTypes.INTEGER,
    h1800: DataTypes.INTEGER
  }, {});
  NubosidadJournal.associate = function(models) {
    // associations can be defined here
  };
  return NubosidadJournal;
};