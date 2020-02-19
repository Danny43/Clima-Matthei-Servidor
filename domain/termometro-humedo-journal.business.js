const BaseBusiness = require("./base.business");
const { TermometroHumedoJournal } = require("./models");

class TermometroHumedoJournalBusiness extends BaseBusiness {
  constructor({ TermometroHumedoJournalRepository }) {
    super(TermometroHumedoJournalRepository, TermometroHumedoJournal);
  }
}

module.exports = TermometroHumedoJournalBusiness;
