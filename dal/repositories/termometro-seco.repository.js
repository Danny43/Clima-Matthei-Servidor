const BaseRepository = require("./base.repository");

class TermometroSecoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TermometroSeco");
  }
}

module.exports = TermometroSecoRepository;
