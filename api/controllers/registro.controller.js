const mapper = require("automapper-js");
const { RegistroDto } = require("../dtos");
class RegistroController {
  constructor({ RegistroService }) {
    this._registroService = RegistroService;
  }

  async getRegistros(req, res) {
    let registros = await this._registroService.getAll();
    registros = registros.map(registro => mapper(RegistroDto, registro));
    return res.send({
      payload: registros
    });
  }

  async getRegistro(req, res) {
    const { id } = req.params;
    let registro = await this._registroService.get(id);
    if (!registro) {
      return res.status(404).send();
    }
    registro = mapper(RegistroDto, registro);
    return res.send({
      payload: registro
    });
  }

  async createRegistro(req, res) {
    const { body } = req;
    const createdRegistro = await this._registroService.create(body);
    const registro = mapper(RegistroDto, createdRegistro);
    return res.status(201).send({
      payload: registro
    });
  }

  async updateRegistro(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._registroService.update(id, body);
    return res.status(204).send();
  }

  async deleteRegistro(req, res) {
    const { id } = req.params;

    await this._registroService.delete(id);
    return res.status(204).send();
  }
}

module.exports = RegistroController;
