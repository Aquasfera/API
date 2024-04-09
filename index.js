const express = require('express')
const cors = require('cors')
const sequelize = require('./database/database.js')

const User = require('./models/user.js')
const Animal = require('./models/animal.js')
const Specie = require('./models/specie.js')
const Photo = require('./models/photo.js')
const Location = require('./models/location.js')
const Post = require('./models/post.js')
const userRoutes = require('./routes/user.routes.js')
const postRoutes = require('./routes/post.routes.js')
const animalRoutes = require('./routes/animal.routes.js')
const specieRoutes = require('./routes/species.routes.js')
const photoRoutes = require('./routes/photo.routes.js')
const locationRoutes = require('./routes/location.routes.js')

const app = express()
const PORT = 3000
const cookieParser = require('cookie-parser')
const originURL = 'http://localhost:5173'
async function main() {
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors({ origin: originURL, credentials: true }))
    app.use('/api', userRoutes)
    app.use('/api', postRoutes)
    app.use('/api', animalRoutes)
    app.use('/api', specieRoutes)
    app.use('/api', photoRoutes)
    app.use('/api', locationRoutes)
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
    
    //ALTER Altera la base de datos sin borrarlos por si se cambia la estructura
    await sequelize.sync({ alter: true })
}
main()