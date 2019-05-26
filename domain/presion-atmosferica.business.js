const BaseBusiness = require("./base.business");
const { PresionAtmosferica } = require("./models");

class PresionAtmosfericaBusiness extends BaseBusiness {
  constructor({ PresionAtmosfericaRepository }) {
    super(PresionAtmosfericaRepository, PresionAtmosferica);
  }
}

module.exports = PresionAtmosfericaBusiness;
