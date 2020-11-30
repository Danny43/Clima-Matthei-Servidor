const jwt = require('jsonwebtoken');

class UsuarioPermisoController {
    constructor({ UsuarioPermisoService, PermisoService }) {
        this._usuarioPermisoService = UsuarioPermisoService;
        this._permisoService = PermisoService;
    }

    async getUsuarioPermisos(req, res) {
        const usuarioPermisos = await this._usuarioPermisoService.getAll();
        return res.send({
            payload: usuarioPermisos
        });
    }

    async getUsuarioPermiso(req, res) {
        const { id } = req.params;
        const usuarioPermiso = await this._usuarioPermisoService.get(id);
        if (!usuario) {
            return res.status(404).send();
        }
        return res.send({
            payload: usuarioPermiso
        });
    }

    async createUsuarioPermiso(req, res) {

        let token = req.headers.authorization.split(' ')[1];
        let payload = jwt.verify(token, 'secretKey');
        const idUser = payload.subject;
        const listaPermisos = await this._usuarioPermisoService.getAll();
        let permitido = false;
        for (let i = 0; i < listaPermisos.length; i++) {
            const permiso = listaPermisos[i];

            if (idUser == permiso.UsuarioId && permiso.PermisoId == 2) {
                permitido = true;
            }

        }

        if (permitido) {
            const { body } = req;
            const createdUsuarioPermiso = await this._usuarioPermisoService.create(body);
            return res.status(201).send({
                payload: createdUsuarioPermiso
            });
        } else {
            return res.status(401).send();
        }
    }

    async updateUsuarioPermiso(req, res) {
        const { body } = req;
        const { id } = req.params;

        await this._usuarioPermisoService.update(id, body);
        return res.status(204).send();
    }

    async deleteUsuarioPermiso(req, res) {

        let token = req.headers.authorization.split(' ')[1];
        let payload = jwt.verify(token, 'secretKey');
        const idUser = payload.subject;
        const listaPermisos = await this._usuarioPermisoService.getAll();
        let permitido = false;
        for (let i = 0; i < listaPermisos.length; i++) {
            const permiso = listaPermisos[i];

            if (idUser == permiso.UsuarioId && permiso.PermisoId == 2) {
                permitido = true;
            }

        }

        if (permitido) {
            const { id } = req.params;
            await this._usuarioPermisoService.delete(id);
            return res.status(204).send();
        } else {
            return res.status(401).send();
        }

    }
}

module.exports = UsuarioPermisoController;