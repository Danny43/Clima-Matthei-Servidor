const BaseBusiness = require("./base.business");
const { Registro } = require("./models");

class RegistroBusiness extends BaseBusiness {
  constructor({ RegistroRepository }) {
    super(RegistroRepository, Registro);
  }
}

module.exports = RegistroBusiness;
