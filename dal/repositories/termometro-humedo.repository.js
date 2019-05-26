const BaseRepository = require("./base.repository");

class TermometroHumedoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "TermometroHumedo");
  }
}

module.exports = TermometroHumedoRepository;
