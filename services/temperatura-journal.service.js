const BaseService = require("./base.service");
class TemperaturaJournalService extends BaseService {
  constructor({ TemperaturaJournalBusiness }) {
    super(TemperaturaJournalBusiness);
  }
}

module.exports = TemperaturaJournalService;
