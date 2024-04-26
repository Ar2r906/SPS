const { sequelize } = require('../connection')
const { DataTypes } = require('sequelize')

const feedback = sequelize.define(
    'feedback',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.TEXT,
            required: true,
        },
        name: {
            type: DataTypes.TEXT,
            required: true,
        },
        message: {
            type: DataTypes.TEXT,
            required: true,
        }
    },
    {
        tableName: 'feedback',
        timestamps: true,
    }
)

async function get_feedback_table() {
    await feedback.sync()
    console.log('Синхронизация Feedback выполнена')
}
module.exports = { feedback, get_feedback_table } 