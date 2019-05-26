const mapper = require("automapper-js");
const { NubosidadDto } = require("../dtos");
class NubosidadController {
  constructor({ NubosidadService }) {
    this._nubosidadService = NubosidadService;
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
    const { body } = req;
    const createdNubosidad = await this._nubosidadService.create(body);
    const nubosidad = mapper(NubosidadDto, createdNubosidad);
    return res.status(201).send({
      payload: nubosidad
    });
  }

  async updateNubosidad(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._nubosidadService.update(id, body);
    return res.status(204).send();
  }

  async deleteNubosidad(req, res) {
    const { id } = req.params;

    await this._nubosidadService.delete(id);
    return res.status(204).send();
  }
}

module.exports = NubosidadController;
