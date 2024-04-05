const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Animal = require("./animal.js")
const Photo = sequelize.define('photos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
})


module.exports = Photo