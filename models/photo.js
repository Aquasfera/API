const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Photo = sequelize.define('photos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
})


module.exports = Photo