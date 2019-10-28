const BaseBusiness = require("./base.business");
const { RegistroJournal } = require("./models");

class RegistroJournalBusiness extends BaseBusiness {
  constructor({ RegistroJournalRepository }) {
    super(RegistroJournalRepository, RegistroJournal);
  }
}

module.exports = RegistroJournalBusiness;
