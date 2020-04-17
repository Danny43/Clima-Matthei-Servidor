const { Router } = require("express");
const jwt = require("jsonwebtoken");

module.exports = function({ RegistroController }) {
  const router = Router();

  function verifyToken(req, res, next) {
    console.log('se procede a verificar el token');
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

//   router.get("/", RegistroController.getExcels.bind(RegistroController));
//   router.get("/:id", RegistroController.getExcel.bind(RegistroController));
  router.post("/", verifyToken, RegistroController.registrarExcel.bind(RegistroController));
//   router.put("/:id", RegistroController.updateExcel.bind(RegistroController));
//   router.delete("/:id", RegistroController.deleteExcel.bind(RegistroController));

  return router;
};
