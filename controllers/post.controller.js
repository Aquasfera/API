const Post = require('../models/post.js')
const User = require('../models/user.js')
const Animal = require('../models/animal.js')
const Specie = require('../models/specie.js')
const Photo = require('../models/photo.js')
const Location = require('../models/location.js')

const getAllData = async (req, res) => {
    try {
        const allData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'avatar']
                }, {
                    model: Animal,
                    attributes: ['name', 'description']
                },
                // {
                //     model:Location,
                //     attributes:['name']   
                // }
            ],
            attributes: { exclude: ['user_id', 'animal_id'] }
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
        const allData = await Post.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: User,
                    attributes: ['username', 'avatar']
                }, {
                    model: Animal,
                    attributes: ['name', 'description']
                }
            ],
            attributes: { exclude: ['user_id', 'animal_id','updatedAt','createdAt'] }
        })
        if (!allData) {
           return res.status(404).json({ message: "Post not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getPostByUser = async (req, res) => {
    try {
        const allData = await Post.findAll({
            where: { user_id: req.params.id },
            include: [
                {
                    model: User,
                    attributes: ['username', 'avatar']
                }, {
                    model: Animal,
                    attributes: ['name', 'description']
                }
            ],
            attributes: { exclude: ['user_id', 'animal_id','updatedAt','createdAt'] }
        })
        if (!allData) {
           return res.status(404).json({ message: "Post not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getPostByAnimal = async (req, res) => {
    try {
        const allData = await Post.findAll({
            where: { animal_id: req.params.id },
            include: [
                {
                    model: User,
                    attributes: ['username', 'avatar']
                }, {
                    model: Animal,
                    attributes: ['name', 'description']
                }
            ],
            attributes: { exclude: ['user_id', 'animal_id','updatedAt','createdAt'] }
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
    getAllDataById,
    getPostByUser,
    getPostByAnimal
}