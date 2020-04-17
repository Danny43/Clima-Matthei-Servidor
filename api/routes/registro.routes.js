const { Router } = require("express");
const jwt = require('jsonwebtoken');

module.exports = function({ RegistroController }) {
  const router = Router();

  function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

  router.get("/", RegistroController.getRegistros.bind(RegistroController));
  router.get("/:id", RegistroController.getRegistro.bind(RegistroController));
  router.get("/:fecha", RegistroController.getRegistroFecha.bind(RegistroController));
  router.post("/", verifyToken, RegistroController.createRegistro.bind(RegistroController));
  router.put("/:id", verifyToken, RegistroController.updateRegistro.bind(RegistroController));
  router.delete("/:id", verifyToken, RegistroController.deleteRegistro.bind(RegistroController));

  return router;
};
