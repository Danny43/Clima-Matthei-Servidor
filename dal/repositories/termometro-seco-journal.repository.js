const BaseRepository = require("./base.repository");

class TermometroSecoJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TermometroSecoJournal");
  }
}

module.exports = TermometroSecoJournalRepository;
