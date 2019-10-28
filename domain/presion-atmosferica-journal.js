const BaseBusiness = require("./base.business");
const { PresionAtmosfericaJournal } = require("./models");

class PresionAtmosfericaJournalBusiness extends BaseBusiness {
  constructor({ PresionAtmosfericaJournalRepository }) {
    super(PresionAtmosfericaJournalRepository, PresionAtmosfericaJournal);
  }
}

module.exports = PresionAtmosfericaJournalBusiness;
