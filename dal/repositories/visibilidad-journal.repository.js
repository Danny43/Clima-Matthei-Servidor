const BaseRepository = require("./base.repository");

class VisibilidadJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "VisibilidadJournal");
  }
}

module.exports = VisibilidadJournalRepository;
