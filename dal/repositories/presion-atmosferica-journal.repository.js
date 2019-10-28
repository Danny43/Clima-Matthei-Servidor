const BaseRepository = require("./base.repository");

class PresionAtmosfericaJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "PresionAtmosfericaJournal");
  }
}

module.exports = PresionAtmosfericaJournalRepository;
