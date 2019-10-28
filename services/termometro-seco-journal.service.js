const BaseService = require("./base.service");
class TermometroSecoJournalService extends BaseService {
  constructor({ TermometroSecoJournalBusiness }) {
    super(TermometroSecoJournalBusiness);
  }
}

module.exports = TermometroSecoJournalService;
