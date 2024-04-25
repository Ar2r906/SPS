const { Sequelize } = require('sequelize')
const dbConfig = require('./config/db.config')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operationAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min:  dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('БД подключена');
    }
    catch (error) {
        console.log(`error: ${error}`);
    }
}
connect()

module.exports = { sequelize }