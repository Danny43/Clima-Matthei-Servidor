const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { TemperaturaDto, TemperaturaJournalDto } = require("../dtos");
class TemperaturaController {
  constructor({ TemperaturaService, TemperaturaJournalService }) {
    this._temperaturaService = TemperaturaService;
    this._temperaturaJournalService = TemperaturaJournalService;
  }

  async getTemperaturas(req, res) {
    let temperaturas = await this._temperaturaService.getAll();
    temperaturas = temperaturas.map(temperatura => mapper(TemperaturaDto, temperatura));
    return res.send({
      payload: temperaturas
    });
  }

  async getTemperatura(req, res) {
    const { id } = req.params;
    let temperatura = await this._temperaturaService.get(id);
    if (!temperatura) {
      return res.status(404).send();
    }
    temperatura = mapper(TemperaturaDto, temperatura);
    return res.send({
      payload: temperatura
    });
  }

  async createTemperatura(req, res) {
    let temperaturaJournal =  new TemperaturaJournalDto();
    const { body } = req;
    const createdTemperatura = await this._temperaturaService.create(body);
    const temperatura = mapper(TemperaturaDto, createdTemperatura);
    return res.status(201).send({
      payload: temperatura
    });
  }

  async updateTemperatura(req, res) {
    let temperaturaJournal =  new TemperaturaJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._temperaturaService.update(id, body);
      temperaturaJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
      let token = req.headers.authorization.split(' ')[1];
      let payload = jwt.verify(token, 'secretKey');
      temperaturaJournal.UsuarioId = payload.subject;
      temperaturaJournal.minima = body.minima;
      temperaturaJournal.maxima = body.maxima;
      temperaturaJournal.TemperaturaId = id;
      let createdTemperaturaJournal = await this._temperaturaJournalService.create(temperaturaJournal);
    return res.status(204).send();
  }

  async deleteTemperatura(req, res) {
    const { id } = req.params;

    await this._temperaturaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TemperaturaController;
