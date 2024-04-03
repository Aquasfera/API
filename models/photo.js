const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Animal = require("./animal.js")
const Photo = sequelize.define('photos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Animal.hasMany(Photo, {
    foreignKey: 'animal_id',
    sourceKey: 'id'
})
Photo.belongsTo(Animal, {
    foreignKey: 'animal_id',
    sourceKey: 'id'
})
module.exports = Photo