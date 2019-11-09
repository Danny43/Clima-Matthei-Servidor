const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { VisibilidadDto, VisibilidadJournalDto } = require("../dtos");

class VisibilidadController {
  constructor({ VisibilidadService, VisibilidadJournalService }) {
    this._visibilidadService = VisibilidadService;
    this._visibilidadJournalService = VisibilidadJournalService;
  }

  async getVisibilidades(req, res) {
    let visibilidades = await this._visibilidadService.getAll();
    visibilidades = visibilidades.map(visibilidad => mapper(VisibilidadDto, visibilidad));
    return res.send({
      payload: visibilidades
    });
  }

  async getVisibilidad(req, res) {
    const { id } = req.params;
    let visibilidad = await this._visibilidadService.get(id);
    if (!visibilidad) {
      return res.status(404).send();
    }
    visibilidad = mapper(VisibilidadDto, visibilidad);
    return res.send({
      payload: visibilidad
    });
  }

  async createVisibilidad(req, res) {
    var visibilidadJournal = new VisibilidadJournalDto();
    const { body } = req;

    const createdVisibilidad = await this._visibilidadService.create(body);
    visibilidadJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    visibilidadJournal.UsuarioId = payload.subject;
    visibilidadJournal.h0830 = createdVisibilidad.h0830;
    visibilidadJournal.h1400 = createdVisibilidad.h1400;
    visibilidadJournal.h1800 = createdVisibilidad.h1800;
    visibilidadJournal.VisibilidadId = createdVisibilidad.id;
    const createdVisibilidadJournal = await this._visibilidadJournalService.create(visibilidadJournal);

    const visibilidad = mapper(VisibilidadDto, createdVisibilidad);
    return res.status(201).send({
      payload: visibilidad
    });
  }

  async updateVisibilidad(req, res) {
    var visibilidadJournal = new VisibilidadJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._visibilidadService.update(id, body);
    visibilidadJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    visibilidadJournal.UsuarioId = payload.subject;
    visibilidadJournal.h0830 = body.h0830;
    visibilidadJournal.h1400 = body.h1400;
    visibilidadJournal.h1800 = body.h1800;
    visibilidadJournal.VisibilidadId = id;
    const createdVisibilidadJournal = await this._visibilidadJournalService.create(visibilidadJournal);

    return res.status(204).send();
  }

  async deleteVisibilidad(req, res) {
    const { id } = req.params;

    await this._visibilidadService.delete(id);
    return res.status(204).send();
  }
}

module.exports = VisibilidadController;
