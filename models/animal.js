const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Post = require('./post.js')
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
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
Animal.hasMany(Post,{
    foreignKey:'animal_id',
    sourceKey:'id'
})
Post.belongsTo(Animal, {
    foreignKey: 'animal_id',
    sourceKey: 'id'
})

module.exports = Animal