const Post = require('../models/post.js')
const User = require('../models/user.js')
const Animal = require('../models/animal.js')
const Specie = require('../models/specie.js')
const Photo = require('../models/photo.js')
const Location = require('../models/location.js')
const { where } = require('sequelize')

const getAllData = async (req, res) => {
    try {
        const allData = await Animal.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'avatar']
                }, {
                    model: Location,
                    attributes: ['name', 'description']
                },{
                    model: Specie,
                    attributes: ['name', 'description']
                },
                {
                    model: Photo,
                    attributes: ['url']
                }

            ],
            attributes: { exclude: ['specie_id'] }
        })
        if(!allData){
            return res.status(404).json({ message: "Post not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getAllDataById = async (req, res) => {
    try {
        const allData = await Animal.findOne({
            where: { id: req.params.id },
            include: [
                // {
                //     model: User,
                //     attributes: ['username', 'avatar']
                // },
                 {
                    model: Location,
                    attributes: ['name', 'description']
                },{
                    model: Specie,
                    attributes: ['name', 'description']
                },
                {
                    model: Photo,
                    attributes: ['url']
                }

            ],
            attributes: { exclude: ['specie_id'] }
        })
        if (!allData) {
           return res.status(404).json({ message: "Post not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getAllData,
    getAllDataById
}