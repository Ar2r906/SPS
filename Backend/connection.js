const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:asdF0987@example.com:5432/db1237')

(async () => {
    try {
        await sequelize.authenticate()
        console.log('db connectted');
    }
    catch (error) {
        console.log(`error: {error}`);
    }
})()

module.exports = { sequelize }