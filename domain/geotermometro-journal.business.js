const BaseBusiness = require("./base.business");
const { GeotermometroJournal } = require("./models");

class GeotermometroJournalBusiness extends BaseBusiness {
  constructor({ GeotermometroJournalRepository }) {
    super(GeotermometroJournalRepository, GeotermometroJournal);
  }
}

module.exports = GeotermometroJournalBusiness;
