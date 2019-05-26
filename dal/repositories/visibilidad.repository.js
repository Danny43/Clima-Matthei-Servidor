const BaseRepository = require("./base.repository");

class VisibilidadRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Visibilidad");
  }
}

module.exports = VisibilidadRepository;
