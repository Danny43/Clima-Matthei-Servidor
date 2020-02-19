const BaseService = require("./base.service");
class RegistroJournalService extends BaseService {
  constructor({ RegistroJournalBusiness }) {
    super(RegistroJournalBusiness);
  }
}

module.exports = RegistroJournalService;
