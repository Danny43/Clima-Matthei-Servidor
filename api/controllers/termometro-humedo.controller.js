const mapper = require("automapper-js");
const { TermometroHumedoDto } = require("../dtos");
class TermometroHumedoController {
  constructor({ TermometroHumedoService }) {
    this._termometroHumedoService = TermometroHumedoService;
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
    termometroHumedo = mapper(TermometroHumedoDto, termometroHumedo);
    return res.send({
      payload: termometroHumedo
    });
  }

  async createTermometroHumedo(req, res) {
    const { body } = req;
    const createdTermometroHumedo = await this._termometroHumedoService.create(body);
    const termometroHumedo = mapper(TermometroHumedoDto, createdTermometroHumedo);
    return res.status(201).send({
      payload: termometroHumedo
    });
  }

  async updateTermometroHumedo(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._termometroHumedoService.update(id, body);
    return res.status(204).send();
  }

  async deleteTermometroHumedo(req, res) {
    const { id } = req.params;

    await this._termometroHumedoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TermometroHumedoController;
