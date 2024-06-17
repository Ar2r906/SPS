const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const team = sequelize.define(
    'team', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nameTeam: {
            type: DataTypes.TEXT,
        },

    },
    { 
        tableName: 'team',
        timestamps: false,
    },
);

async function getTeam() {
    await team.sync()
    console.log('Синхронизация с Team выполнена')
}
module.exports = { team, getTeam}
