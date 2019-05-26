const BaseRepository = require("./base.repository");

class NubosidadRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Nubosidad");
  }
}

module.exports = NubosidadRepository;
