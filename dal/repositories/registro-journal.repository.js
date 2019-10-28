const BaseRepository = require("./base.repository");

class RegistroJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "RegistroJournal");
  }
}

module.exports = RegistroJournalRepository;
