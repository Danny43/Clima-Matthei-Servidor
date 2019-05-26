const BaseBusiness = require("./base.business");
const { TermometroHumedo } = require("./models");

class TermometroHumedoBusiness extends BaseBusiness {
  constructor({ TermometroHumedoRepository }) {
    super(TermometroHumedoRepository, TermometroHumedo);
  }
}

module.exports = TermometroHumedoBusiness;
