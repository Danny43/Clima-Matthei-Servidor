const { Router } = require("express");

module.exports = function({ RegistroController }) {
  const router = Router();
  router.bodyParser({limit: '50mb'});

//   router.get("/", RegistroController.getExcels.bind(RegistroController));
//   router.get("/:id", RegistroController.getExcel.bind(RegistroController));
  router.post("/", RegistroController.registrarExcel.bind(RegistroController));
//   router.put("/:id", RegistroController.updateExcel.bind(RegistroController));
//   router.delete("/:id", RegistroController.deleteExcel.bind(RegistroController));

  return router;
};
