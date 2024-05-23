const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const workout = sequelize.define(
    'workout', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        uid: {
            type: DataTypes.UUID,
        },
        title: {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
        },
    },
    { }
);

async function getWorkout() {
    await workout.sync()
    console.log('Синхронизация с Workout выполнена')
}
module.exports = { workout, getWorkout}