const BaseService = require("./base.service");
class PermisoService extends BaseService {
  constructor({ PermisoBusiness }) {
    super(PermisoBusiness);
  }
}

module.exports = PermisoService;
