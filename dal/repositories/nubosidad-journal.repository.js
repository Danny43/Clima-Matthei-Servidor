const BaseRepository = require("./base.repository");

class NubosidadJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "NubosidadJournal");
  }
}

module.exports = NubosidadJournalRepository;
