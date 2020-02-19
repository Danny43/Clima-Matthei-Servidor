const BaseBusiness = require("./base.business");
const { TemperaturaJournal } = require("./models");

class TemperaturaJournalBusiness extends BaseBusiness {
  constructor({ TemperaturaJournalRepository }) {
    super(TemperaturaJournalRepository, TemperaturaJournal);
  }
}

module.exports = TemperaturaJournalBusiness;
