const express = require('express')
const cors = require('cors')
const sequelize = require('./database/database.js')

const app = express()
const PORT = 3000
const cookieParser = require('cookie-parser')
const originURL =  'http://localhost:5173'
async function main(){
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors({origin: originURL ,credentials:true}))
    app.listen(PORT)
    //ALTER Altera la base de datos sin borrarlos por si se cambia la estructura
    await sequelize.sync({alter:true})
}
main()