const BaseRepository = require("./base.repository");

class DireccionVientoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "DireccionViento");
  }
}

module.exports = DireccionVientoRepository;
