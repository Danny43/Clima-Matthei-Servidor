const mapper = require("automapper-js");
const { PresionAtmosfericaDto } = require("../dtos");
class PresionAtmosfericaController {
  constructor({ PresionAtmosfericaService }) {
    this._presionAtmosfericaService = PresionAtmosfericaService;
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
    presionAtmosferica = mapper(PresionAtmosfericaDto, presionAtmosferica);
    return res.send({
      payload: presionAtmosferica
    });
  }

  async createPresionAtmosferica(req, res) {
    const { body } = req;
    const createdPresionAtmosferica = await this._presionAtmosfericaService.create(body);
    const presionAtmosferica = mapper(PresionAtmosfericaDto, createdPresionAtmosferica);
    return res.status(201).send({
      payload: presionAtmosferica
    });
  }

  async updatePresionAtmosferica(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._presionAtmosfericaService.update(id, body);
    return res.status(204).send();
  }

  async deletePresionAtmosferica(req, res) {
    const { id } = req.params;

    await this._presionAtmosfericaService.delete(id);
    return res.status(204).send();
  }
}

module.exports = PresionAtmosfericaController;
