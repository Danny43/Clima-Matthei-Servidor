const mapper = require("automapper-js");
const { RegistroDto,
  Registro2Dto,
  TemperaturaDto,
  DireccionVientoDto,
  TermometroSecoDto,
  TermometroHumedoDto,
  PresionAtmosfericaDto,
  NubosidadDto,
  VisibilidadDto,
  GeotermometroDto} = require("../dtos");

class RegistroController {
  constructor({ 
    RegistroService, 
    TemperaturaService,
    DireccionVientoService,
    TermometroSecoService,
    TermometroHumedoService,
    PresionAtmosfericaService,
    NubosidadService,
    VisibilidadService,
    GeotermometroService
  }) {
    this._registroService = RegistroService;
    this._temperaturaService = TemperaturaService;
    this._direccionVientoService = DireccionVientoService;
    this._termometroSecoService = TermometroSecoService;
    this._termometroHumedoService = TermometroHumedoService;
    this._presionAtmosfericaService = PresionAtmosfericaService;
    this._nubosidadService = NubosidadService;
    this._visibilidadService = VisibilidadService;
    this._geotermometroService = GeotermometroService;
  }

  async getRegistros(req, res) {
    let registros = await this._registroService.getAll();
    registros = registros.map(registro => mapper(RegistroDto, registro));
    return res.send({
      payload: registros
    });
  }
 
  async getRegistro(req, res) {
    const { id } = req.params;
    let registro = await this._registroService.get(id);      
    let temperatura = await this._temperaturaService.get(registro.TemperaturaId);
    let direccionViento = await this._direccionVientoService.get(registro.DireccionVientoId);
    let termometroSeco = await this._termometroSecoService.get(registro.TermometroSecoId);
    let termometroHumedo = await this._termometroHumedoService.get(registro.TermometroHumedoId);
    let presionAtmosferica = await this._presionAtmosfericaService.get(registro.PresionAtmosfericaId);
    let nubosidad = await this._nubosidadService.get(registro.NubosidadId);
    let visibilidad = await this._visibilidadService.get(registro.VisibilidadId);
    let geotermometro = await this._geotermometroService.get(registro.GeotermometroId);

    var r2 = new Registro2Dto();
    r2.id = registro.id;
    r2.fecha = registro.fecha;
    r2.agua_caida = registro.agua_caida;
    r2.horas_sol = registro.horas_sol;
    r2.evaporamiento = registro.evaporamiento;
    r2.createdAt = registro.createdAt;
    r2.updatedAt = registro.updatedAt;
    r2.Temperatura = temperatura;
    r2.DireccionViento = direccionViento;
    r2.TermometroSeco = termometroSeco;
    r2.TermometroHumedo = termometroHumedo;
    r2.PresionAtmosferica = presionAtmosferica;
    r2.Nubosidad = nubosidad;
    r2.Visibilidad = visibilidad;
    r2.Geotermometro = geotermometro;

    if (!r2) {
      return res.status(404).send();
    }
    r2 = mapper(Registro2Dto, r2);
    return res.send({
      payload: r2
    });
  }

  async createRegistro(req, res) {
    const { body } = req;

    var reg = new Registro2Dto();
    var registro = new RegistroDto();
    var temperatura = new TemperaturaDto();
    var termometroHumedo = new TermometroHumedoDto();
    var termometroSeco = new TermometroSecoDto();
    var presionAtmosferica = new PresionAtmosfericaDto();
    var direccionViento = new DireccionVientoDto();
    var nubosidad = new NubosidadDto();
    var visibilidad = new VisibilidadDto();
    var geotermometro = new GeotermometroDto();

     reg = body;

    temperatura = reg.Temperatura;
    let createdTemperatura = await this._temperaturaService.create(temperatura);

    termometroHumedo = reg.TermometroHumedo;
    const createdTermometroHumedo = await this._termometroHumedoService.create(termometroHumedo);

    termometroSeco = reg.TermometroSeco;
    const createdTermometroSeco = await this._termometroSecoService.create(termometroSeco);

    presionAtmosferica = reg.PresionAtmosferica;
    const createdPresionAtmosferica = await this._presionAtmosfericaService.create(presionAtmosferica);

    direccionViento = reg.DireccionViento;
    const createdDireccionViento = await this._direccionVientoService.create(direccionViento);

    nubosidad = reg.Nubosidad;
    const createdNubosidad = await this._nubosidadService.create(nubosidad);

    visibilidad = reg.Visibilidad;
    const createdVisibilidad = await this._visibilidadService.create(visibilidad);

    geotermometro = reg.Geotermometro;
    const createdGeotermometro = await this._geotermometroService.create(geotermometro);


    registro.fecha = reg.fecha;
    registro.horas_sol = reg.horas_sol;
    registro.agua_caida = reg.agua_caida;
    registro.evaporamiento = reg.evaporamiento;
    registro.TemperaturaId = createdTemperatura.id;
    registro.TermometroHumedoId = createdTermometroHumedo.id;
    registro.TermometroSecoId = createdTermometroSeco.id;
    registro.PresionAtmosfericaId = createdPresionAtmosferica.id;
    registro.DireccionVientoId = createdDireccionViento.id;
    registro.NubosidadId = createdNubosidad.id;
    registro.VisibilidadId = createdVisibilidad.id;
    registro.GeotermometroId = createdGeotermometro.id;
    const createdRegistro = await this._registroService.create(registro);

    var reg2 = new Registro2Dto();
    reg2.id = createdRegistro.id;
    reg2.fecha = createdRegistro.fecha;
    reg2.horas_sol = createdRegistro.horas_sol;
    reg2.agua_caida = createdRegistro.agua_caida;
    reg2.evaporamiento = createdRegistro.evaporamiento;
    reg2.Temperatura = createdTemperatura;
    reg2.TermometroHumedo = createdTermometroHumedo;
    reg2.TermometroSeco = createdTermometroSeco;
    reg2.PresionAtmosferica = createdPresionAtmosferica;
    reg2.DireccionViento = createdDireccionViento;
    reg2.Nubosidad = createdNubosidad;
    reg2.Visibilidad = createdVisibilidad;
    reg2.Geotermometro = createdGeotermometro;

    const registro2 = mapper(Registro2Dto, reg2);
    return res.status(201).send({
      payload: registro2
    });
  }

  async updateRegistro(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._registroService.update(id, body);
    return res.status(204).send();

  }

  async deleteRegistro(req, res) {
    const { id } = req.params;

    await this._registroService.delete(id);
    return res.status(204).send();
  }
}

module.exports = RegistroController;
