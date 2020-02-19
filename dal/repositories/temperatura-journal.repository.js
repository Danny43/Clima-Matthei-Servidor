const BaseRepository = require("./base.repository");

class TemperaturaJournalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TemperaturaJournal");
  }
}

module.exports = TemperaturaJournalRepository;
