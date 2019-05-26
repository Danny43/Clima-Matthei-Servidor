const BaseRepository = require("./base.repository");

class GeotermometroRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Geotermometro");
  }
}

module.exports = GeotermometroRepository;
