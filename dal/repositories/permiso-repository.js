const BaseRepository = require("./base.repository");

class RegistroRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Permiso");
  }
}

module.exports = RegistroRepository;
