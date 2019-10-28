const BaseRepository = require("./base.repository");

class UsuarioJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "UsuarioJournal");
  }
}

module.exports = UsuarioJournalRepository;
