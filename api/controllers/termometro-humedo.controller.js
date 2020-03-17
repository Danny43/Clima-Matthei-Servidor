const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { TermometroHumedoDto, TermometroHumedoJournalDto } = require("../dtos");
class TermometroHumedoController {
  constructor({ TermometroHumedoService, TermometroHumedoJournalService }) {
    this._termometroHumedoService = TermometroHumedoService;
    this._termometroHumedoJournalService = TermometroHumedoJournalService;
  }

  async getTermometroHumedos(req, res) {
    let termometroHumedos = await this._termometroHumedoService.getAll();
    termometroHumedos = termometroHumedos.map(termometroHumedo => mapper(TermometroHumedoDto, termometroSeco));
    return res.send({
      payload: termometroHumedos
    });
  }

  async getTermometroHumedo(req, res) {
    const { id } = req.params;
    let termometroHumedo = await this._termometroHumedoService.get(id);
    if (!termometroHumedo) {
      return res.status(404).send();
    }
    return res.send({
      payload: termometroHumedo
    });
  }

  async createTermometroHumedo(req, res) {
    var termometroHumedoJournal = new TermometroHumedoJournalDto();
    const { body } = req;

    const createdTermometroHumedo = await this._termometroHumedoService.create(body);
    termometroHumedoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    termometroHumedoJournal.UsuarioId = payload.subject;
    termometroHumedoJournal.h0830 = createdTermometroHumedo.h0830;
    termometroHumedoJournal.h1400 = createdTermometroHumedo.h1400;
    termometroHumedoJournal.h1800 = createdTermometroHumedo.h1800;
    termometroHumedoJournal.TermometroHumedoId = createdTermometroHumedo.id;
    const createdTermometroHumedoJournal = this._termometroHumedoJournalService.create(termometroHumedoJournal);
    return res.status(201).send({
      payload: createdTermometroHumedo
    });
  }

  async updateTermometroHumedo(req, res) {
    var termometroHumedoJournal = new TermometroHumedoJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._termometroHumedoService.update(id, body);
    termometroHumedoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    termometroHumedoJournal.UsuarioId = payload.subject;
    termometroHumedoJournal.h0830 = body.h0830;
    termometroHumedoJournal.h1400 = body.h1400;
    termometroHumedoJournal.h1800 = body.h1800;
    termometroHumedoJournal.TermometroHumedoId = id;
    const createdTermometroHumedoJournal = this._termometroHumedoJournalService.create(termometroHumedoJournal);

    return res.status(204).send();
  }

  async deleteTermometroHumedo(req, res) {
    const { id } = req.params;

    await this._termometroHumedoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TermometroHumedoController;
