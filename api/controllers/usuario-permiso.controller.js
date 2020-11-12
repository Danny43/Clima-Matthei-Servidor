
class UsuarioPermisoController {
    constructor({ UsuarioPermisoService, PermisoService }) {
        this._usuarioPermisoService = UsuarioPermisoService;
        this._permisoService = PermisoService;
    }

    async getUsuarioPermisos(req, res) {
        const { id } = req.params;
        const usuarioPermisos = await this._usuarioPermisoService.getAll();
        let permisosUsuarioId = [];
        for (let i = 0; i < usuarioPermisos.length; i++) {
            const usuarioPermiso = usuarioPermisos[i];
            if (id == usuarioPermiso.UsuarioId) {
                permisosUsuarioId.push(usuarioPermiso.PermisoId)
            }
        }
        let permisos = [];
        for (let i = 0; i < permisosUsuarioId.length; i++) {
            const permisoId = permisosUsuarioId[i];
            const permiso = await this._permisoService.get(permisoId);
            permisos.push(permiso);
        }
        return res.send({
            payload: permisos
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
        const { body } = req;
        const createdUsuarioPermiso = await this._usuarioPermisoService.create(body);
        return res.status(201).send({
            payload: createdUsuarioPermiso
        });
    }

    async updateUsuarioPermiso(req, res) {
        const { body } = req;
        const { id } = req.params;

        await this._usuarioPermisoService.update(id, body);
        return res.status(204).send();
    }

    async deleteUsuarioPermiso(req, res) {
        const { id } = req.params;

        await this._usuarioPermisoService.delete(id);
        return res.status(204).send();
    }
}

module.exports = UsuarioPermisoController;