const BaseService = require("./base.service");
class RegistroService extends BaseService {
  constructor({ RegistroBusiness }) {
    super(RegistroBusiness);
  }
}

module.exports = RegistroService;
