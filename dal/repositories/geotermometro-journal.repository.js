const BaseRepository = require("./base.repository");

class GeotermometroJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "GeotermometroJournal");
  }
}

module.exports = GeotermometroJournalRepository;
