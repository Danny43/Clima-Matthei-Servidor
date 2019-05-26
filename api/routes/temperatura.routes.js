const { Router } = require("express");

module.exports = function({ TemperaturaController }) {
  const router = Router();

  router.get("/", TemperaturaController.getTemperaturas.bind(TemperaturaController));
  router.get("/:id", TemperaturaController.getTemperatura.bind(TemperaturaController));
  router.post("/", TemperaturaController.createTemperatura.bind(TemperaturaController));
  router.put("/:id", TemperaturaController.updateTemperatura.bind(TemperaturaController));
  router.delete("/:id", TemperaturaController.deleteTemperatura.bind(TemperaturaController));

  return router;
};
