module.exports = {
  PORT: process.env.PORT,
  DB:  {
    database: 'mt',
    username: 'apiserver',
    password: 'mattheiAPIJS2435!',
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
