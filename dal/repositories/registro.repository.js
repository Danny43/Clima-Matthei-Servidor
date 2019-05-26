const BaseRepository = require("./base.repository");

class RegistroRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Registro");
  }
}

module.exports = RegistroRepository;
