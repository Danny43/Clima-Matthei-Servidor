const BaseBusiness = require("./base.business");
const { NubosidadJournal } = require("./models");

class NubosidadJournalBusiness extends BaseBusiness {
  constructor({ NubosidadJournalRepository }) {
    super(NubosidadJournalRepository, NubosidadJournal);
  }
}

module.exports = NubosidadJournalBusiness;
