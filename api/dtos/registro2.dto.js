const {
TemperaturaDto,
TermometroSecoDto,
TermometroHumedoDto,
PresionAtmosfericaDto,
DireccionVientoDto,
NubosidadDto,
VisibilidadDto,
GeotermometroDto
} = require("./index")
class Registro2Dto {
  id = 0;
  fecha = "0000-00-00";
  agua_caida = null;
  horas_sol = null;
  evaporamiento = null;
  createdAt = null;
  updatedAt = null;
  Temperatura = TemperaturaDto;
  TermometroSeco = TermometroSecoDto;
  TermometroHumedo = TermometroHumedoDto;
  PresionAtmosferica = PresionAtmosfericaDto;
  DireccionViento = DireccionVientoDto
  Nubosidad = NubosidadDto;
  Visibilidad = VisibilidadDto;
  Geotermometro = GeotermometroDto;
}

module.exports = Registro2Dto;
