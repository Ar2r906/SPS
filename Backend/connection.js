const { Sequelize } = require('sequelize')
/*
Указать данные сервера postgre
*/
const sequelize = new Sequelize('postgres://postgres:')

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('db connectted');
    }
    catch (error) {
        console.log(`error: {error}`);
    }
}
connect()

module.exports = { sequelize }