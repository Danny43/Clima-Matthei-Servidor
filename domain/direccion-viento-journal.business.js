const BaseBusiness = require("./base.business");
const { DireccionVientoJournal } = require("./models");

class DireccionVientoJournalBusiness extends BaseBusiness {
  constructor({ DireccionVientoJournalRepository }) {
    super(DireccionVientoJournalRepository, DireccionVientoJournal);
  }
}

module.exports = DireccionVientoJournalBusiness;
