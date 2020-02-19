const BaseService = require("./base.service");
class GeotermometroJournalService extends BaseService {
  constructor({ GeotermometroJournalBusiness }) {
    super(GeotermometroJournalBusiness);
  }
}

module.exports = GeotermometroJournalService;
