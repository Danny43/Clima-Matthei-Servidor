const BaseService = require("./base.service");
class TemperaturaService extends BaseService {
  constructor({ TemperaturaBusiness }) {
    super(TemperaturaBusiness);
  }
}

module.exports = TemperaturaService;
