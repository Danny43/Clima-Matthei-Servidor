const BaseBusiness = require("./base.business");
const { UsuarioJournal } = require("./models");

class UsuarioJournalBusiness extends BaseBusiness {
  constructor({ UsuarioJournalRepository }) {
    super(UsuarioJournalRepository, UsuarioJournal);
  }
}

module.exports = UsuarioJournalBusiness;
