const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Location = sequelize.define('locations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Location