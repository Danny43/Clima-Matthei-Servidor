const mapper = require("automapper-js");
const { GeotermometroDto } = require("../dtos");
class GeotermometroController {
  constructor({ GeotermometroService }) {
    this._geotermometroService = GeotermometroService;
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
    const { body } = req;
    const createdGeotermometro = await this._geotermometroService.create(body);
    const geotermometro = mapper(GeotermometroDto, createdGeotermometro);
    return res.status(201).send({
      payload: geotermometro
    });
  }

  async updateGeotermometro(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._geotermometroService.update(id, body);
    return res.status(204).send();
  }

  async deleteGeotermometro(req, res) {
    const { id } = req.params;

    await this._geotermometroService.delete(id);
    return res.status(204).send();
  }
}

module.exports = GeotermometroController;
