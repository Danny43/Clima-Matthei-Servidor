module.exports = {
  PORT: process.env.PORT,
  DB:  {
    database: 'mt',
    username: 'apiserver',
    password: 'mattheiAPIJS2435!',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
