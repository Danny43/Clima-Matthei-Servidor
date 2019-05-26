const BaseRepository = require("./base.repository");

class TemperaturaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Temperatura");
  }
}

module.exports = TemperaturaRepository;
