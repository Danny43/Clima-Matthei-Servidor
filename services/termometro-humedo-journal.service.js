const BaseService = require("./base.service");
class TermometroHumedoJournalService extends BaseService {
  constructor({ TermometroHumedoJournalBusiness }) {
    super(TermometroHumedoJournalBusiness);
  }
}

module.exports = TermometroHumedoJournalService;
