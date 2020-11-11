const mapper = require("automapper-js");
const {
  UsuarioDto
} = require("../dtos");
const jwt = require('jsonwebtoken');

class UsuarioController {
  constructor({
    UsuarioService,
    UsuarioPermisoService
  }) {
    this._usuarioService = UsuarioService;
    this._usuarioPermisoService = UsuarioPermisoService;
  }

  async getUsuarios(req, res) {
    let usuarios = await this._usuarioService.getAll();
    usuarios = usuarios.map(usuario => mapper(UsuarioDto, usuario));
    return res.send({
      payload: usuarios
    });
  }

  async getUsuario(req, res) {
    const {
      id
    } = req.params;
    let usuario = await this._usuarioService.get(id);
    if (!usuario) {
      return res.status(404).send();
    }
    return res.send({
      payload: usuario
    });
  }

  async getToken(req, res) {
    return res.status(204).send();
  }

  async getMyUser(req, res) {
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    const idUser = payload.subject;
    const usuario = await this._usuarioService.get(idUser);
    if (usuario) {
      return res.status(200).send({ usuario })
    } else {
      return res.status(401).send();
    }
  }

  async iniciarSesion(req, res) {
    const {
      body
    } = req;
    var email = body.email;
    let usuario = await this._usuarioService.getbyEmail(email);
    if (!usuario) {
      return res.status(401).send();
    } else {
      if (body.password === usuario.password) {
        usuario.password = null;
        let payload = {
          subject: usuario.id
        };
        let token = jwt.sign(payload, 'secretKey');
        return res.status(200).send({
          token,
          usuario
        });
      } else {
        return res.status(401).send();
      }
    }
  }

  async createUsuario(req, res) {
    let token = req.headers.authorization.split(' ')[1];
    let payload = jwt.verify(token, 'secretKey');
    const idUser = payload.subject;
    const listaPermisos = this._usuarioPermisoService.getAll();
    let permitido = false;
    for (let i = 0; i < listaPermisos.length; i++) {
      const permiso = listaPermisos[i];

      if (idUser == permiso.UsuarioId && permiso.PermisoId == 1) {
        permitido = true;
      }

    }

    if (permitido) {
      const { body } = req;
      const createdUsuario = await this._usuarioService.create(body);
      //const usuario = mapper(UsuarioDto, createdUsuario);
      return res.status(201).send({
        payload: createdUsuario
      });
    }else{
      return res.status(401).send();
    }


  }

  async updateUsuario(req, res) {
    const {
      body
    } = req;
    const {
      id
    } = req.params;

    await this._usuarioService.update(id, body);
    return res.status(204).send();
  }

  async deleteUsuario(req, res) {
    const {
      id
    } = req.params;

    await this._usuarioService.delete(id);
    return res.status(204).send();
  }
}

module.exports = UsuarioController;