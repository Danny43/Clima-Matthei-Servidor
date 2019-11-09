const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { NubosidadDto, NubosidadJournalDto } = require("../dtos");
class NubosidadController {
  constructor({ NubosidadService, NubosidadJournalService }) {
    this._nubosidadService = NubosidadService;
    this._nubosidadJournalService = NubosidadJournalService;
  }

  async getNubosidades(req, res) {
    let nubosidades = await this._nubosidadService.getAll();
    nubosidades = nubosidades.map(nubosidad => mapper(NubosidadDto, nubosidad));
    return res.send({
      payload: nubosidades
    });
  }

  async getNubosidad(req, res) {
    const { id } = req.params;
    let nubosidad = await this._nubosidadService.get(id);
    if (!nubosidad) {
      return res.status(404).send();
    }
    nubosidad = mapper(NubosidadDto, nubosidad);
    return res.send({
      payload: nubosidad
    });
  }

  async createNubosidad(req, res) {
    let nubosidadJournal = new NubosidadJournalDto();
    const { body } = req;

    const createdNubosidad = await this._nubosidadService.create(body);
    nubosidadJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    nubosidadJournal.UsuarioId = payload.subject;
    nubosidadJournal.h0830 = createdNubosidad.h0830;
    nubosidadJournal.h1400 = createdNubosidad.h1400;
    nubosidadJournal.h1800 = createdNubosidad.h1800;
    nubosidadJournal.NubosidadId = createdNubosidad.id;
    const createdNubosidadJournal = await this._nubosidadJournalService.create(nubosidadJournal);
    const nubosidad = mapper(NubosidadDto, createdNubosidad);

    return res.status(201).send({
      payload: nubosidad
    });
  }

  async updateNubosidad(req, res) {
    let nubosidadJournal = new NubosidadJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._nubosidadService.update(id, body);
    nubosidadJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    nubosidadJournal.UsuarioId = payload.subject;
    nubosidadJournal.h0830 = body.h0830;
    nubosidadJournal.h1400 = body.h1400;
    nubosidadJournal.h1800 = body.h1800;
    nubosidadJournal.NubosidadId = id;
    const createdNubosidadJournal = await this._nubosidadJournalService.create(nubosidadJournal);

    return res.status(204).send();
  }

  async deleteNubosidad(req, res) {
    const { id } = req.params;

    await this._nubosidadService.delete(id);
    return res.status(204).send();
  }
}

module.exports = NubosidadController;
