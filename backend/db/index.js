const { Sequelize } = require('sequelize');

const dbConfig = {
  "username": "postgres",
  "password": "postgres",
  "database": "db",
  "host": "localhost",
  "port": 5432,
  "dialect": "postgres",
  "logging": true,
  "timezone": "+00:00"
};
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    'username': dbConfig.username,
    'password': dbConfig.password,
    'database': dbConfig.database,
    'host': dbConfig.host,
    'port': dbConfig.port,
    'dialect': 'postgres',
    'logging': false,
    'timezone': '+00:00'
  }
);

module.exports =  sequelize;