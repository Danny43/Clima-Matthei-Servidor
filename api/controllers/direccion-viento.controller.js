const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { DireccionVientoDto, DireccionVientoJournalDto } = require("../dtos");
class DireccionVientoController {
  constructor({ DireccionVientoService, DireccionVientoJournalService }) {
    this._direccionVientoService = DireccionVientoService;
    this._direccionVientoJournalService = DireccionVientoJournalService;
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
    let direccionVientoJournal = new DireccionVientoJournalDto();
    const { body } = req;
    const createdDireccionViento = await this._direccionVientoService.create(body);
    direccionVientoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    direccionVientoJournal.UsuarioId = payload.subject;
    direccionVientoJournal.h0830 = createdDireccionViento.h0830;
    direccionVientoJournal.h1400 = createdDireccionViento.h1400;
    direccionVientoJournal.h1800 = createdDireccionViento.h1800;
    direccionVientoJournal.DireccionVientoId = createdDireccionViento.id;
    let createdDireccionVientoJournal = await this._direccionVientoJournalService.create(direccionVientoJournal);
    const direccionViento = mapper(DireccionVientoDto, createdDireccionViento);
    return res.status(201).send({
      payload: direccionViento
    });
  }

  async updateDireccionViento(req, res) {
    let direccionVientoJournal = new DireccionVientoJournalDto();
    const { body } = req;
    const { id } = req.params;

    await this._direccionVientoService.update(id, body);
    direccionVientoJournal.IPUser = req.header('x-forwarded-for') || req.connection.remoteAddress;
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    direccionVientoJournal.UsuarioId = payload.subject;
    direccionVientoJournal.h0830 = body.h0830;
    direccionVientoJournal.h1400 = body.h1400;
    direccionVientoJournal.h1800 = body.h1800;
    direccionVientoJournal.DireccionVientoId = id;
    let createdDireccionVientoJournal = await this._direccionVientoJournalService.create(direccionVientoJournal);
    return res.status(204).send();
  }

  async deleteDireccionViento(req, res) {
    const { id } = req.params;

    await this._direccionVientoService.delete(id);
    return res.status(204).send();
  }
}

module.exports = DireccionVientoController;
