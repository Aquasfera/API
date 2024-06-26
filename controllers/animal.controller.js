const Post = require('../models/post.js')
const User = require('../models/user.js')
const Animal = require('../models/animal.js')
const Specie = require('../models/specie.js')
const Photo = require('../models/photo.js')
const Location = require('../models/location.js')

const getAllData = async (req, res) => {
    try {
        const allData = await Animal.findAll({
            include: [
               {
                    model: Location,
                    attributes: ['name', 'description']
                },{
                    model: Specie,
                    attributes: ['name', 'description']
                },
                {
                    model: Photo,
                    attributes: ['id','url']
                },
                {
                    model: Post,
                    attributes: ['description','url','user_id']
                }

            ],
            attributes: { exclude: ['specie_id'] }
        })
        if(!allData){
            return res.status(404).json({ message: "Animal not found" })
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
                //  {
                //      model: User,
                //      attributes: ['username', 'avatar']
                //  },
                 {
                    model: Post,
                    attributes: ['description','url','user_id']
                 },
                 {
                    model: Location,
                    attributes: ['name', 'description']
                },{
                    model: Specie,
                    attributes: ['name', 'description']
                },
                {
                    model: Photo,
                    attributes: ['id','url']
                }

            ],
            attributes: { exclude: ['specie_id'] }
        })
        if (!allData) {
           return res.status(404).json({ message: `Animal with ${req.params.id} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getAllDataByName = async (req, res) => {
    try {
        const allData = await Animal.findOne({
            where: { name: req.params.name },
            include: [
                
                 {
                    model: Post,
                    attributes: ['description','url','user_id']
                 },
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
           return res.status(404).json({ message: `Animal with ${req.params.name} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getAllDataByLocation = async (req, res) => {
    try {
        const allData = await Animal.findAll({
            
            include: [
                {
                    model: Location,
                    where: { id: req.params.location_id },
                    attributes: ['name', 'description']
                },{
                    model: Specie,
                    attributes: ['name', 'description']
                },
                {
                    model: Photo,
                    attributes: ['id','url']
                },
                {
                    model: Post,
                    attributes: ['description','url','user_id']
                }

            ],
            attributes: { exclude: ['specie_id'] }
        })
        if(!allData){
            return res.status(404).json({ message: "Animal not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllData,
    getAllDataById,
    getAllDataByName,
    getAllDataByLocation
}