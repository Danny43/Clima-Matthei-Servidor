const { Router } = require("express");

module.exports = function({ PresionAtmosfericaController }) {
  const router = Router();

  router.get("/", PresionAtmosfericaController.getPresionAtmosfericas.bind(PresionAtmosfericaController));
  router.get("/:id", PresionAtmosfericaController.getPresionAtmosferica.bind(PresionAtmosfericaController));
  router.post("/", PresionAtmosfericaController.createPresionAtmosferica.bind(PresionAtmosfericaController));
  router.put("/:id", PresionAtmosfericaController.updatePresionAtmosferica.bind(PresionAtmosfericaController));
  router.delete("/:id", PresionAtmosfericaController.deletePresionAtmosferica.bind(PresionAtmosfericaController));

  return router;
};
