const BaseBusiness = require("./base.business");
const { Visibilidad } = require("./models");

class VisibilidadBusiness extends BaseBusiness {
  constructor({ VisibilidadRepository }) {
    super(VisibilidadRepository, Visibilidad);
  }
}

module.exports = VisibilidadBusiness;
