const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize')
const Post = require('./post.js')
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
User.hasMany(Post,{
    foreignKey:'user_id',
    sourceKey:'id'
})
Post.belongsTo(User, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})
module.exports = User