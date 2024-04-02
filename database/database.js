const {Sequelize, Datatypes} = require('sequelize')

const sequelize = new Sequelize("aquaesfera","root","monlau21!",{
    host:"localhost",
    dialect:"mysql"
})
module.exports = sequelize