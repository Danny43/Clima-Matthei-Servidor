
class PermisoController {
    constructor({ PermisoService }) {
        this._permisoService = PermisoService;
    }

    async getPermisos(req, res) {
        const permisos = await this._permisoService.getAll();
        return res.send({
            payload: permisos
        });
    }

    async getPermiso(req, res) {
        const { id } = req.params;
        const permiso = await this._permisoService.get(id);
        if (!usuario) {
            return res.status(404).send();
        }
        return res.send({
            payload: permiso
        });
    }

    async createPermiso(req, res) {
        const { body } = req;
        const createdPermiso = await this._permisoService.create(body);
        return res.status(201).send({
            payload: createdPermiso
        });
    }

    async updatePermiso(req, res) {
        const { body } = req;
        const { id } = req.params;

        await this._permisoService.update(id, body);
        return res.status(204).send();
    }

    async deletePermiso(req, res) {
        const { id } = req.params;

        await this._permisoService.delete(id);
        return res.status(204).send();
    }
}

module.exports = PermisoController;