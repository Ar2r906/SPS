const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const workout = sequelize.define(
    'workout', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
        },
        complexity: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
        },
        time: {
            type: DataTypes.TIME,
        },
        duration: {
            type: DataTypes.TIME,
        },
        UserId: {
            type: DataTypes.INTEGER,
        },
    },
    { 
        tableName: 'workout',
        timestamps: false,
    },
);

async function getWorkout() {
    await workout.sync()
    console.log('Синхронизация с Workout выполнена')
}
module.exports = { workout, getWorkout}
