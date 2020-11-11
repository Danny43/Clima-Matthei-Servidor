const BaseBusiness = require("./base.business");
const { UsuarioPermiso } = require("./models");

class UsuarioPermisoBusiness extends BaseBusiness {
  constructor({ UsuarioPermisoRepository }) {
    super(UsuarioPermisoRepository, UsuarioPermiso);
  }
}

module.exports = UsuarioPermisoBusiness;
