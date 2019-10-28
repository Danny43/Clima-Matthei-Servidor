const BaseService = require("./base.service");
class DireccionVientoJournalService extends BaseService {
  constructor({ DireccionVientoJournalBusiness }) {
    super(DireccionVientoJournalBusiness);
  }
}

module.exports = DireccionVientoJournalService;
