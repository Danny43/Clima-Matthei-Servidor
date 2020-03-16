const mapper = require("automapper-js");

class BaseBusiness {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this.entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await this._entityRepository.getAll();
    return entities.map(entity => mapper(this.entityToMap, entity.toJSON()));
  }

  async get(id) {
    const entity = await this._entityRepository.get(id);
    if (!entity) return null;
    return entity.toJSON();
  }

  async getbyFecha(fecha) {
    const entity = await this._entityRepository.getbyFecha(fecha);
    if (!entity) return null;
    return entity.toJSON();
  }

  async getbyEmail(email) {
    const entity = await this._entityRepository.getbyEmail(email);
    if (!entity) return null;
    return entity.toJSON();
  }

  async create(entity) {
    const createdEntity = await this._entityRepository.create(entity);
    return createdEntity.toJSON();
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this._entityRepository.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    return await this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
