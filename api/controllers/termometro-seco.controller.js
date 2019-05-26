const mapper = require("automapper-js");
const { TermometroSecoDto } = require("../dtos");
class TermometroSecoController {
  constructor({ TermometroSecoService }) {
    this._termometroSecoService = TermometroSecoService;
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
    termometroSeco = mapper(TermometroSecoDto, termometroSeco);
    return res.send({
      payload: termometroSeco
    });
  }

  async createTermometroSeco(req, res) {
    const { body } = req;
    const createdTermometroSeco = await this._termometroSecoService.create(body);
    const termometroSeco = mapper(TermometroSecoDto, createdTermometroSeco);
    return res.status(201).send({
      payload: termometroSeco
    });
  }

  async updateTermometroSeco(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._termometroSecoService.update(id, body);
    return res.status(204).send();
  }

  async deleteTermometroSeco(req, res) {
    const { id } = req.params;

    await this._termometroSecoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = TermometroSecoController;
