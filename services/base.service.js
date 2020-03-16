class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  async getAll() {
    const entities = await this._entityBusiness.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    return entity;
  }

  async getbyFecha(fecha) {
    const entity = await this._entityBusiness.getbyFecha(fecha);
    return entity;
  }

  async getbyEmail(email) {
    const entity = await this._entityBusiness.getbyEmail(email);
    return entity;
  }

  async create(entity) {
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    console.log("valor a guardar en la capa de servicios: " + entity.h0830);
    const updatedEntity = await this._entityBusiness.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this._entityBusiness.delete(id);
    return deletedEntity;
  }
}

module.exports = BaseService;
