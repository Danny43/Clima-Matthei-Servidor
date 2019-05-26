const BaseBusiness = require("./base.business");
const { Temperatura } = require("./models");

class TemperaturaBusiness extends BaseBusiness {
  constructor({ TemperaturaRepository }) {
    super(TemperaturaRepository, Temperatura);
  }
}

module.exports = TemperaturaBusiness;
