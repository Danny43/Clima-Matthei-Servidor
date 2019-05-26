const { Router } = require("express");

module.exports = function({ TermometroHumedoController }) {
  const router = Router();

  router.get("/", TermometroHumedoController.getTermometroHumedos.bind(TermometroHumedoController));
  router.get("/:id", TermometroHumedoController.getTermometroHumedo.bind(TermometroHumedoController));
  router.post("/", TermometroHumedoController.createTermometroHumedo.bind(TermometroHumedoController));
  router.put("/:id", TermometroHumedoController.updateTermometroHumedo.bind(TermometroHumedoController));
  router.delete("/:id", TermometroHumedoController.deleteTermometroHumedo.bind(TermometroHumedoController));

  return router;
};
