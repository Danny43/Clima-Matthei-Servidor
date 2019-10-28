const BaseRepository = require("./base.repository");

class DireccionVientoJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "DireccionVientoJournal");
  }
}

module.exports = DireccionVientoJournalRepository;
