const { Router } = require("express");

module.exports = function({ VisibilidadController }) {
  const router = Router();

  router.get("/", VisibilidadController.getVisibilidades.bind(VisibilidadController));
  router.get("/:id", VisibilidadController.getVisibilidad.bind(VisibilidadController));
  router.post("/", VisibilidadController.createVisibilidad.bind(VisibilidadController));
  router.put("/:id", VisibilidadController.updateVisibilidad.bind(VisibilidadController));
  router.delete("/:id", VisibilidadController.deleteVisibilidad.bind(VisibilidadController));

  return router;
};
