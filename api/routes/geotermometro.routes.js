const { Router } = require("express");

module.exports = function({ GeotermometroController }) {
  const router = Router();

  router.get("/", GeotermometroController.getGeotermometros.bind(GeotermometroController));
  router.get("/:id", GeotermometroController.getGeotermometro.bind(GeotermometroController));
  router.post("/", GeotermometroController.createGeotermometro.bind(GeotermometroController));
  router.put("/:id", GeotermometroController.updateGeotermometro.bind(GeotermometroController));
  router.delete("/:id", GeotermometroController.deleteGeotermometro.bind(GeotermometroController));

  return router;
};
