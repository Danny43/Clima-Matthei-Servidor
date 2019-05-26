const BaseRepository = require("./base.repository");

class PresionAtmosfericaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "PresionAtmosferica");
  }
}

module.exports = PresionAtmosfericaRepository;
