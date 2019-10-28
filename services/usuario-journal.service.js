const BaseService = require("./base.service");
class UsuarioJournalService extends BaseService {
  constructor({ UsuarioJournalBusiness }) {
    super(UsuarioJournalBusiness);
  }
}

module.exports = UsuarioJournalService;
