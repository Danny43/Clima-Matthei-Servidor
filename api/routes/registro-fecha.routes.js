const { Router } = require("express");

module.exports = function({ RegistroController }) {
  const router = Router();
  router.get("/:fecha", RegistroController.getRegistroFecha.bind(RegistroController));
  return router;
};
