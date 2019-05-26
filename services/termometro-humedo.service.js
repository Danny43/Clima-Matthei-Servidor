const BaseService = require("./base.service");
class TermometroHumedoService extends BaseService {
  constructor({ TermometroHumedoBusiness }) {
    super(TermometroHumedoBusiness);
  }
}

module.exports = TermometroHumedoService;
