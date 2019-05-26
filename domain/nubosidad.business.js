const BaseBusiness = require("./base.business");
const { Nubosidad } = require("./models");

class NubosidadBusiness extends BaseBusiness {
  constructor({ NubosidadRepository }) {
    super(NubosidadRepository, Nubosidad);
  }
}

module.exports = NubosidadBusiness;
