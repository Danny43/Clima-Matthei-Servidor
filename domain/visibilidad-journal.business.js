const BaseBusiness = require("./base.business");
const { VisibilidadJournal } = require("./models");

class VisibilidadJournalBusiness extends BaseBusiness {
  constructor({ VisibilidadJournalRepository }) {
    super(VisibilidadJournalRepository, VisibilidadJournal);
  }
}

module.exports = VisibilidadJournalBusiness;
