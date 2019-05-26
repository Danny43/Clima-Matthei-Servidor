const BaseBusiness = require("./base.business");
const { DireccionViento } = require("./models");

class DireccionVientoBusiness extends BaseBusiness {
  constructor({ DireccionVientoRepository }) {
    super(DireccionVientoRepository, DireccionViento);
  }
}

module.exports = DireccionVientoBusiness;
