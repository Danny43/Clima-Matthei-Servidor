const BaseRepository = require("./base.repository");

class TermometroHumedoJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TermometroHumedoJournal");
  }
}

module.exports = TermometroHumedoJournalRepository;
