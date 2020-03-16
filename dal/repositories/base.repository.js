class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this.entity = entity;
  }

  getAll() {
    return this._db[this.entity].findAll();
  }

  get(id) {
    return this._db[this.entity].findOne({ where: { id } });
  }

  getbyFecha(fecha) {
    return this._db[this.entity].findOne({
       where: {
          fecha: fecha } });
  }

  getbyEmail(email) {
    return this._db[this.entity].findOne({
       where: {
          email: email } });
  }

  create(entity) {
    return this._db[this.entity].create(entity);
  }

  update(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this._db[this.entity].update(entity, { where: { id } });
  }

  delete(id) {
    return this._db[this.entity].destroy({ where: { id } });
  }
}

module.exports = BaseRepository;
