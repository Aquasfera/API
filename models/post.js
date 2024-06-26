const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')

const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // likes: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }

})

module.exports = Post