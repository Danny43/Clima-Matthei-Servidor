const { Router } = require("express");

module.exports = function({ NubosidadController }) {
  const router = Router();

  router.get("/", NubosidadController.getNubosidades.bind(NubosidadController));
  router.get("/:id", NubosidadController.getNubosidad.bind(NubosidadController));
  router.post("/", NubosidadController.createNubosidad.bind(NubosidadController));
  router.put("/:id", NubosidadController.updateNubosidad.bind(NubosidadController));
  router.delete("/:id", NubosidadController.deleteNubosidad.bind(NubosidadController));

  return router;
};
