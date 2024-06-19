const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const event = sequelize.define(
    'event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
        },
        discipline: {
            type: DataTypes.TIME,
        },
        description: {
            type: DataTypes.TEXT,
        },

    },
    { 
        tableName: 'event',
        timestamps: false,
    },
);

async function getEvent() {
    await event.sync()
    console.log('Синхронизация с Event выполнена')
}
module.exports = { event, getEvent}
