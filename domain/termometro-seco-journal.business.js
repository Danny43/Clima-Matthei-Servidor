const BaseBusiness = require("./base.business");
const { TermometroSecoJournal } = require("./models");

class TermometroSecoJournalBusiness extends BaseBusiness {
  constructor({ TermometroSecoJournalRepository }) {
    super(TermometroSecoJournalRepository, TermometroSecoJournal);
  }
}

module.exports = TermometroSecoJournalBusiness;
