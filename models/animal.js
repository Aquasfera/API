const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Animal = sequelize.define('animals', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scientific_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        
    }
})

module.exports = Animal