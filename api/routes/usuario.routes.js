const { Router } = require("express");
const jwt = require('jsonwebtoken');

module.exports = function({ UsuarioController }) {
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

  //Comprobar Sesion
  //router.get("/", verifyToken, UsuarioController.getToken.bind(UsuarioController));
  //Registrar
  router.post("/", UsuarioController.iniciarSesion.bind(UsuarioController));
  //Iniciar Sesion
  router.put("/",  UsuarioController.iniciarSesion.bind(UsuarioController));

  router.put("/actualiza/:id",  UsuarioController.updateUsuario.bind(UsuarioController));

  router.get("/", verifyToken, UsuarioController.getMyUser.bind(UsuarioController));

  router.get("/list", verifyToken, UsuarioController.getUsuarios.bind(UsuarioController));

  router.get("/:id", verifyToken, UsuarioController.getUsuario.bind(UsuarioController));

  router.post("/crear", verifyToken, UsuarioController.createUsuario.bind(UsuarioController));


  return router;
};
