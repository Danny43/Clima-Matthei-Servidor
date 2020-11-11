const { Router } = require("express");
const jwt = require('jsonwebtoken');

module.exports = function({ PermisoController }) {
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

  router.get("/", verifyToken, PermisoController.getPermisos.bind(PermisoController));
  router.get("/:id", verifyToken, PermisoController.getPermiso.bind(PermisoController));
  router.post("/", verifyToken, PermisoController.createPermiso.bind(PermisoController));
  router.put("/:id", verifyToken, PermisoController.updatePermiso.bind(PermisoController));
  router.delete("/:id", verifyToken, PermisoController.deletePermiso.bind(PermisoController));

  return router;
};
