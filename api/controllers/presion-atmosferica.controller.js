const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { PresionAtmosfericaDto, PresionAtmosfericaJournalDto } = require("../dtos");
class PresionAtmosfericaController {
  constructor({ PresionAtmosfericaService, PresionAtmosfericaJournalService }) {
    this._presionAtmosfericaService = PresionAtmosfericaService;
    this._presionAtmosfericaJournalervice = PresionAtmosfericaJournalService;
  }

  async getPresionAtmosfericas(req, res) {
    let presionAtmosfericas = await this._presionAtmosfericaService.getAll();
    presionAtmosfericas = presionAtmosfericas.map(presionAtmosferica => mapper(PresionAtmosfericaDto, presionAtmosferica));
    return res.send({
      payload: presionAtmosfericas
    });
  }

  async getPresionAtmosferica(req, res) {
    const { id } = req.params;
    let presionAtmosferica = await this._presionAtmosfericaService.get(id);
    if (!presionAtmosferica) {
      return res.status(404).send();
    }
    return res.send({
      payload: presionAtmosferica
    });
  }

  async createPresionAtmosferica(req, res) {
    var presionAtmosfericaJournal = new PresionAtmosfericaJournalDto();
    const { body } = req;

    const createdPresionAtmosferica = await this._presionAtmosfericaService.create(body);
    presionAtmosfericaJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    presionAtmosfericaJournal.UsuarioId = payload.subject;
    presionAtmosfericaJournal.h0830 = createdPresionAtmosferica.h0830;
    presionAtmosfericaJournal.h1400 = createdPresionAtmosferica.h1400;
    presionAtmosfericaJournal.h1800 = createdPresionAtmosferica.h1800;
    presionAtmosfericaJournal.PresionAtmosfericaId = createdPresionAtmosferica.id;
    const createdPresionAtmosfericaJournal = await this._presionAtmosfericaJournalervice.create(presionAtmosfericaJournal);
    return res.status(201).send({
      payload: createdPresionAtmosferica
    });
  }

  async updatePresionAtmosferica(req, res) {
    var presionAtmosfericaJournal = new PresionAtmosfericaJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._presionAtmosfericaService.update(id, body);
    presionAtmosfericaJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    presionAtmosfericaJournal.UsuarioId = payload.subject;
    presionAtmosfericaJournal.h0830 = body.h0830;
    presionAtmosfericaJournal.h1400 = body.h1400;
    presionAtmosfericaJournal.h1800 = body.h1800;
    presionAtmosfericaJournal.PresionAtmosfericaId = id;
    const createdPresionAtmosfericaJournal = await this._presionAtmosfericaJournalervice.create(presionAtmosfericaJournal);

    return res.status(204).send();
  }

  async deletePresionAtmosferica(req, res) {
    const { id } = req.params;

    await this._presionAtmosfericaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = PresionAtmosfericaController;
