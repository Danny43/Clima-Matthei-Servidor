const BaseBusiness = require("./base.business");
const { TermometroSeco } = require("./models");

class TermometroSecoBusiness extends BaseBusiness {
  constructor({ TermometroSecoRepository }) {
    super(TermometroSecoRepository, TermometroSeco);
  }
}

module.exports = TermometroSecoBusiness;
