const {Sequelize, Datatypes} = require('sequelize')

const sequelize = new Sequelize("aquaesfera","root","monlau21!",{
    host:"localhost",
    dialect:"mysql",
    port:3306,
    
})
module.exports = sequelize