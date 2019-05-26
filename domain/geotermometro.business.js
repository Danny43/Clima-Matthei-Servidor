const BaseBusiness = require("./base.business");
const { Geotermometro } = require("./models");

class GeotermometroBusiness extends BaseBusiness {
  constructor({ GeotermometroRepository }) {
    super(GeotermometroRepository, Geotermometro);
  }
}

module.exports = GeotermometroBusiness;
