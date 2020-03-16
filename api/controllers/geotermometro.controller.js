const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { GeotermometroDto, GeotermometroJournalDto } = require("../dtos");
class GeotermometroController {
  constructor({ GeotermometroService, GeotermometroJournalService }) {
    this._geotermometroService = GeotermometroService;
    this._geotermometroJournalService = GeotermometroJournalService;
  }

  async getGeotermometros(req, res) {
    let geotermometros = await this._geotermometroService.getAll();
    geotermometros = geotermometros.map(geotermometro => mapper(GeotermometroDto, geotermometro));
    return res.send({
      payload: geotermometros
    });
  }

  async getGeotermometro(req, res) {
    const { id } = req.params;
    let geotermometro = await this._geotermometroService.get(id);
    if (!geotermometro) {
      return res.status(404).send();
    }
    geotermometro = mapper(GeotermometroDto, geotermometro);
    return res.send({
      payload: geotermometro
    });
  }

  async createGeotermometro(req, res) {
    let geotermometroJournal = new GeotermometroJournalDto();
    const { body } = req;
    const createdGeotermometro = await this._geotermometroService.create(body);
    geotermometroJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
      let token = req.headers.authorization.split(' ')[1];
      let payload = jwt.verify(token, 'secretKey');
      geotermometroJournal.UsuarioId = payload.subject;
      geotermometroJournal.cm2 = createdGeotermometro.cm2;
      geotermometroJournal.cm5 = createdGeotermometro.cm5;
      geotermometroJournal.cm10 = createdGeotermometro.cm10;
      geotermometroJournal.cm20 = createdGeotermometro.cm20;
      geotermometroJournal.cm50 = createdGeotermometro.cm50;
      geotermometroJournal.cm100 = createdGeotermometro.cm100;
      geotermometroJournal.GeotermometroId = createdGeotermometro.id;
      const createdGeotermometroJournal = await this._geotermometroJournalService.create(geotermometroJournal);
    const geotermometro = mapper(GeotermometroDto, createdGeotermometro);
    return res.status(201).send({
      payload: geotermometro
    });
  }

  async updateGeotermometro(req, res) {
    let geotermometroJournal = new GeotermometroJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._geotermometroService.update(id, body);
    geotermometroJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
      let token = req.headers.authorization.split(' ')[1];
      let payload = jwt.verify(token, 'secretKey');
      geotermometroJournal.UsuarioId = payload.subject;
      geotermometroJournal.cm2 = body.cm2;
      geotermometroJournal.cm5 = body.cm5;
      geotermometroJournal.cm10 = body.cm10;
      geotermometroJournal.cm20 = body.cm20;
      geotermometroJournal.cm50 = body.cm50;
      geotermometroJournal.cm100 = body.cm100;
      geotermometroJournal.GeotermometroId = id;
      const createdGeotermometroJournal = await this._geotermometroJournalService.create(geotermometroJournal);
    return res.status(204).send();
  }

  async deleteGeotermometro(req, res) {
    const { id } = req.params;

    await this._geotermometroService.delete(id);
    return res.status(204).send();
  }
}

module.exports = GeotermometroController;
