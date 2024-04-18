const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')

const Follow = sequelize.define('follows', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followedId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

})

module.exports = Follow