const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { TermometroSecoDto, TermometroSecoJournalDto } = require("../dtos");
class TermometroSecoController {
  constructor({ TermometroSecoService, TermometroSecoJournalService }) {
    this._termometroSecoService = TermometroSecoService;
    this._termometroSecoJournalService = TermometroSecoJournalService;
  }

  async getTermometroSecos(req, res) {
    let termometroSecos = await this._termometroSecoService.getAll();
    termometroSecos = termometroSecos.map(termometroSeco => mapper(TermometroSecoDto, termometroSeco));
    return res.send({
      payload: termometroSecos
    });
  }

  async getTermometroSeco(req, res) {
    const { id } = req.params;
    let termometroSeco = await this._termometroSecoService.get(id);
    if (!termometroSeco) {
      return res.status(404).send();
    }
    console.log('el objeto se ve asi antes del mappeo: '+termometroSeco);
    termometroSeco = mapper(TermometroSecoDto, termometroSeco);
    console.log('el objeto se ve asi despues del mappeo: '+termometroSeco);
    return res.send({
      payload: termometroSeco
    });
  }

  async createTermometroSeco(req, res) {
    var termometroSecoJournal = new TermometroSecoJournalDto();
    const { body } = req;

    const createdTermometroSeco = await this._termometroSecoService.create(body);
    termometroSecoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    termometroSecoJournal.UsuarioId = payload.subject;
    termometroSecoJournal.h0830 = createdTermometroSeco.h0830;
    termometroSecoJournal.h1400 = createdTermometroSeco.h1400;
    termometroSecoJournal.h1800 = createdTermometroSeco.h1800;
    termometroSecoJournal.TermometroSecoId = createdTermometroSeco.id;
    const createdTermometroSecoJournal = await this._termometroSecoJournalService.create(termometroSecoJournal);
    
    const termometroSeco = mapper(TermometroSecoDto, createdTermometroSeco);
    return res.status(201).send({
      payload: termometroSeco
    });
  }

  async updateTermometroSeco(req, res) {
    var termometroSecoJournal = new TermometroSecoJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._termometroSecoService.update(id, body);
    termometroSecoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    termometroSecoJournal.UsuarioId = payload.subject;
    termometroSecoJournal.h0830 = body.h0830;
    termometroSecoJournal.h1400 = body.h1400;
    termometroSecoJournal.h1800 = body.h1800;
    termometroSecoJournal.TermometroSecoId = id;
    const createdTermometroSecoJournal = await this._termometroSecoJournalService.create(termometroSecoJournal);
    
    return res.status(204).send();
  }

  async deleteTermometroSeco(req, res) {
    const { id } = req.params;

    await this._termometroSecoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TermometroSecoController;
