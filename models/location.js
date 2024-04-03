const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Animal = require("./animal.js")
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
Location.belongsToMany(Animal, { through: 'animal_location' })
Animal.belongsToMany(Location, { through: 'animal_location' })

module.exports = Location