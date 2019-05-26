'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registro = sequelize.define('Registro', {
    fecha: DataTypes.DATE,
    agua_caida: DataTypes.FLOAT,
    horas_sol: DataTypes.FLOAT,
    evaporamiento: DataTypes.FLOAT
  }, {});
  Registro.associate = function(models) {
    Registro.belongsTo(models.Temperatura);
    Registro.belongsTo(models.TermometroSeco);
    Registro.belongsTo(models.TermometroHumedo);
    Registro.belongsTo(models.PresionAtmosferica);
    Registro.belongsTo(models.DireccionViento);
    Registro.belongsTo(models.Nubosidad);
    Registro.belongsTo(models.Visibilidad);
    Registro.belongsTo(models.Geotermometro);
  };
  return Registro;
};