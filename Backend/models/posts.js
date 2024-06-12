const { DataTypes } = require('sequelize')
const { sequelize } = require('../connection')

const post = sequelize.define(
    'post',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.TEXT,
        },
        content: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
        file: {
            type: DataTypes.TEXT,
        },
        createdAt :{
            type: DataTypes.DATE,
            defaulvakue: DataTypes.NOW
        }
    },
    {
        tableName: 'posts',
        timestamps: true
    }
);

async function get_posts_table() {
    await auth.sync()
    console.log('Синхронизация Auth выполнена');
}

module.exports = { post, get_posts_table }