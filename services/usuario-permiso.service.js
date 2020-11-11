const BaseService = require("./base.service");
class UsuarioPermisoService extends BaseService {
  constructor({ UsuarioPermisoBusiness }) {
    super(UsuarioPermisoBusiness);
  }
}

module.exports = UsuarioPermisoService;
