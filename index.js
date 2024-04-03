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

const app = express()
const PORT = 3000
const cookieParser = require('cookie-parser')
const originURL =  'http://localhost:5173'
async function main(){
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors({origin: originURL ,credentials:true}))
    app.use('/api',userRoutes)
    app.listen(PORT)
    
    //ALTER Altera la base de datos sin borrarlos por si se cambia la estructura
    await sequelize.sync({alter:true})
}
main()