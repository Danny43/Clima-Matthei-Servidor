const { Router } = require("express");

module.exports = function({ RegistroController }) {
  const router = Router();

  router.get("/", RegistroController.getRegistros.bind(RegistroController));
  router.get("/:id", RegistroController.getRegistro.bind(RegistroController));
  router.post("/", RegistroController.createRegistro.bind(RegistroController));
  router.put("/:id", RegistroController.updateRegistro.bind(RegistroController));
  router.delete("/:id", RegistroController.deleteRegistro.bind(RegistroController));

  return router;
};
