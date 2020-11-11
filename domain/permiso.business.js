const BaseBusiness = require("./base.business");
const { Permiso } = require("./models");

class PermisoBusiness extends BaseBusiness {
  constructor({ PermisoRepository }) {
    super(PermisoRepository, Permiso);
  }
}

module.exports = PermisoBusiness;
