const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Animal = require("./animal.js")
const Specie = sequelize.define('species', {
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

Specie.hasMany(Animal,{
    foreignKey: 'specie_id',
    sourceKey: 'id'
})
Animal.belongsTo(Specie,{
    foreignKey:'specie_id',
    sourceKey:'id'
})
module.exports = Specie