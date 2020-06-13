let temperatura = require('./temperatura');
let termometroSeco = require('./termometro-seco');
let termometroHumedo = require('./termometro-seco');
let presionAtmosferica = require('./presion-atmosferica');
let direccionViento = require('./direccion-viento');
let nubosidad = require('./nubosidad');
let visibilidad = require('./visibilidad');
let geotermometro = require('./geotermometro');

class Registro {
  id = 0;
  fecha = "0000-00-00";
  agua_caida = null;
  horas_sol = null;
  evaporamiento = null;
  createdAt = null;
  updatedAt = null;
  Temperatura = temperatura;
  TermometroSeco = termometroSeco;
  TermometroHumedo = termometroHumedo;
  PresionAtmosferica = presionAtmosferica;
  DireccionViento = direccionViento;
  Nubosidad = nubosidad;
  Visibilidad = visibilidad;
  Geotermometro = geotermometro;
}

module.exports = Registro;
