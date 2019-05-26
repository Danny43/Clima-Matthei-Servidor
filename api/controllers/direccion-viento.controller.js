const mapper = require("automapper-js");
const { DireccionVientoDto } = require("../dtos");
class DireccionVientoController {
  constructor({ DireccionVientoService }) {
    this._direccionVientoService = DireccionVientoService;
  }

  async getDireccionVientos(req, res) {
    let direccionVientos = await this._direccionVientoService.getAll();
    direccionVientos = direccionVientos.map(direccionViento => mapper(DireccionVientoDto, direccionViento));
    return res.send({
      payload: direccionVientos
    });
  }

  async getDireccionViento(req, res) {
    const { id } = req.params;
    let direccionViento = await this._direccionVientoService.get(id);
    if (!direccionViento) {
      return res.status(404).send();
    }
    direccionViento = mapper(DireccionVientoDto, direccionViento);
    return res.send({
      payload: direccionViento
    });
  }

  async createDireccionViento(req, res) {
    const { body } = req;
    const createdDireccionViento = await this._direccionVientoService.create(body);
    const direccionViento = mapper(DireccionVientoDto, createdDireccionViento);
    return res.status(201).send({
      payload: direccionViento
    });
  }

  async updateDireccionViento(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._direccionVientoService.update(id, body);
    return res.status(204).send();
  }

  async deleteDireccionViento(req, res) {
    const { id } = req.params;

    await this._direccionVientoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = DireccionVientoController;
