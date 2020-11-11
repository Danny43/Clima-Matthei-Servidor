const BaseRepository = require("./base.repository");

class UsuarioPermisoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "UsuarioPermiso");
  }
}

module.exports = UsuarioPermisoRepository;
