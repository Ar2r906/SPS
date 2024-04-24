const { Sequelize } = require('sequelize')
/*
Указать данные сервера postgre
*/
const sequelize = new Sequelize('postgres://postgres:asdF0987@localhost:5432/sps')

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('БД подключена');
    }
    catch (error) {
        console.log(`error: {error}`);
    }
}
connect()

module.exports = { sequelize }