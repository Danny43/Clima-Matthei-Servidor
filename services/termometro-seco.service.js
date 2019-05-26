const BaseService = require("./base.service");
class TermometroSecoService extends BaseService {
  constructor({ TermometroSecoBusiness }) {
    super(TermometroSecoBusiness);
  }
}

module.exports = TermometroSecoService;
