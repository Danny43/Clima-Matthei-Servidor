module.exports = {
  PORT: process.env.PORT,
  DB: {
    database: 'mt',
    username: 'nodeuser',
    password: 'nodeuser43',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
