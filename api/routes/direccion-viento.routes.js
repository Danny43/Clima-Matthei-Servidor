const { Router } = require("express");

module.exports = function({ DireccionVientoController }) {
  const router = Router();

  router.get("/", DireccionVientoController.getDireccionVientos.bind(DireccionVientoController));
  router.get("/:id", DireccionVientoController.getDireccionViento.bind(DireccionVientoController));
  router.post("/", DireccionVientoController.createDireccionViento.bind(DireccionVientoController));
  router.put("/:id", DireccionVientoController.updateDireccionViento.bind(DireccionVientoController));
  router.delete("/:id", DireccionVientoController.deleteDireccionViento.bind(DireccionVientoController));

  return router;
};
