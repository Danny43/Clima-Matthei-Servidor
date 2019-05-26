const { Router } = require("express");

module.exports = function({ TermometroSecoController }) {
  const router = Router();

  router.get("/", TermometroSecoController.getTermometroSecos.bind(TermometroSecoController));
  router.get("/:id", TermometroSecoController.getTermometroSeco.bind(TermometroSecoController));
  router.post("/", TermometroSecoController.createTermometroSeco.bind(TermometroSecoController));
  router.put("/:id", TermometroSecoController.updateTermometroSeco.bind(TermometroSecoController));
  router.delete("/:id", TermometroSecoController.deleteTermometroSeco.bind(TermometroSecoController));

  return router;
};
