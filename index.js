const express = require('express')
const cors = require('cors')
const sequelize = require('./database/database.js')
const path = require('path')
const User = require('./models/user.js')
const Animal = require('./models/animal.js')
const Specie = require('./models/specie.js')
const Photo = require('./models/photo.js')
const Location = require('./models/location.js')
const Post = require('./models/post.js')
const Like = require('./models/like.js')
const Follow = require('./models/follow.js')
const userRoutes = require('./routes/user.routes.js')
const postRoutes = require('./routes/post.routes.js')
const animalRoutes = require('./routes/animal.routes.js')
const specieRoutes = require('./routes/species.routes.js')
const photoRoutes = require('./routes/photo.routes.js')
const locationRoutes = require('./routes/location.routes.js')
const likeRoutes = require('./routes/like.routes.js')
const followRoutes = require('./routes/follow.routes.js')
const app = express()
const PORT = 3000
const cookieParser = require('cookie-parser')
const originURL = 'http://localhost:5173'
async function main() {
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors())    
    // app.use(cors({ origin: originURL, credentials: true,methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization']}))

    app.use(express.static('data'))
    app.use('/api/photos',express.static('photos'))
    app.use('/api', userRoutes)
    app.use('/api', postRoutes)
    app.use('/api', animalRoutes)
    app.use('/api', specieRoutes)
    app.use('/api', photoRoutes)
    app.use('/api', locationRoutes)
    app.use('/api', likeRoutes)
    app.use('/api', followRoutes)
    app.listen(PORT)
    
    Specie.hasMany(Animal, {
        foreignKey: 'specie_id',
        sourceKey: 'id'
    })
    Animal.belongsTo(Specie, {
        foreignKey: 'specie_id',
        sourceKey: 'id'
    })
    Animal.hasMany(Photo, {
        foreignKey: 'animal_id',
        sourceKey: 'id'
    })
    Photo.belongsTo(Animal, {
        foreignKey: 'animal_id',
        sourceKey: 'id'
    })
    Location.belongsToMany(Animal, { through: 'animal_location' })
    Animal.belongsToMany(Location, { through: 'animal_location' })

    // Animal.belongsToMany(User, { through: Post })
    // User.belongsToMany(Animal, { through: Post })
    User.hasMany(Like,{
        foreignKey:'userId',
        sourceKey:'id'
    })
    Like.belongsTo(User, {
        foreignKey: 'userId',
        sourceKey: 'id'
    })
    Post.hasMany(Like,{
        foreignKey:'postId',	
        sourceKey:'id'
    })
    Like.belongsTo(Post, {
        foreignKey: 'postId',
        sourceKey: 'id'
    })
    Animal.hasMany(Post,{
        foreignKey:'animal_id',
        sourceKey:'id'
    })
    Post.belongsTo(Animal, {
        foreignKey: 'animal_id',
        sourceKey: 'id'
    })
    User.hasMany(Post, {
        foreignKey: 'user_id',
        sourceKey: 'id'
    })
    Post.belongsTo(User, {
        foreignKey: 'user_id',
        sourceKey: 'id'
    })
    Location.hasMany(Post, {
        foreignKey: 'location_id',
        sourceKey: 'id'
    })
    Post.belongsTo(Location, {
        foreignKey: 'location_id',
        sourceKey: 'id'
    })
    


    User.hasMany(Follow,{
        foreignKey:'followerId',
        sourceKey:'id'
    })
    Follow.belongsTo(User, {
        foreignKey: 'followerId',
        sourceKey: 'id'
    })
    User.hasMany(Follow,{
        foreignKey:'followedId',	
        sourceKey:'id'
    })
    Follow.belongsTo(User, {
        foreignKey: 'followedId',
        sourceKey: 'id'
    })
    //ALTER Altera la base de datos sin borrarlos por si se cambia la estructura
    await sequelize.sync({ alter: true })
}
main()