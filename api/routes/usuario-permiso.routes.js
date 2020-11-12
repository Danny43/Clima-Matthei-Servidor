const { Router } = require("express");
const jwt = require('jsonwebtoken');

module.exports = function({ UsuarioPermisoController }) {
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

 // router.get("/:idUsuario", verifyToken, UsuarioPermisoController.getUsuarioPermisos.bind(UsuarioPermisoController));
  router.get("/", verifyToken, UsuarioPermisoController.getUsuarioPermisos.bind(UsuarioPermisoController));
  router.get("/:id", verifyToken, UsuarioPermisoController.getUsuarioPermiso.bind(UsuarioPermisoController));
  router.post("/", verifyToken, UsuarioPermisoController.createUsuarioPermiso.bind(UsuarioPermisoController));
  router.put("/:id", verifyToken, UsuarioPermisoController.updateUsuarioPermiso.bind(UsuarioPermisoController));
  router.delete("/:id", verifyToken, UsuarioPermisoController.deleteUsuarioPermiso.bind(UsuarioPermisoController));

  return router;
};
