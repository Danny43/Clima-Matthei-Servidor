const mapper = require("automapper-js");
const { VisibilidadDto } = require("../dtos");

class VisibilidadController {
  constructor({ VisibilidadService }) {
    this._visibilidadService = VisibilidadService;
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
    const { body } = req;
    const createdVisibilidad = await this._visibilidadService.create(body);
    const visibilidad = mapper(VisibilidadDto, createdVisibilidad);
    return res.status(201).send({
      payload: visibilidad
    });
  }

  async updateVisibilidad(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._visibilidadService.update(id, body);
    return res.status(204).send();
  }

  async deleteVisibilidad(req, res) {
    const { id } = req.params;

    await this._visibilidadService.delete(id);
    return res.status(204).send();
  }
}

module.exports = VisibilidadController;
