const BaseService = require("./base.service");
class GeotermometroService extends BaseService {
  constructor({ GeotermometroBusiness }) {
    super(GeotermometroBusiness);
  }
}

module.exports = GeotermometroService;
