const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Like = sequelize.define('likes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Like