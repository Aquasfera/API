
const Like = require('../models/like.js')

const getAllLikesByPostId = async (req, res) => {
    try {
        const allData = await Like.findAll({
            where: { postId: req.params.postId },
        })
        if (!allData) {
            return res.status(404).json({ message: `All Post with ${req.params.postId} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getAllLikesByUserIdAndPostId = async (req, res) => {
    try {
        const allData = await Like.findOne({
            where: { userId: req.params.userId,
                     postId: req.params.postId}
        })
        if (!allData) {
            return res.send(false)
        }
        else{
          return res.send(true)  
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllLikesByUserId = async (req, res) => {
    try {
        const allData = await Like.findAll({
            where: { userId: req.params.userId }
        })
        if (!allData) {
            return res.status(404).json({ message: `All likes with ${req.params.userId} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getCountFromLike = async (req, res) => {
    try {
        console.log(req.params.postId)
        const allData = await Like.count({
            where: { postId: req.params.postId }
        })
        if (!allData) {
            return res.json(0)
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const deleteLike = async (req, res) => {
    try {
        const like = await Like.findOne({ where: { 
            userId: req.params.userId,
            postId: req.params.postId 
        }})
        if (!like) {
            return res.status(404).json({ message: `Like no encontrado` })
        }
        await like.destroy()
        res.json({ message: `Like eliminado exitosamente` })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const postLike = async (req, res) => {
    try {
        const likeExist = await Like.findOne({
            where: {
                userId: req.body.userId,
                postId: req.body.postId
            }
        })
        
        if (likeExist) {
            return res.status(400).json({ message: `Like already exist` })
        }
       
        const like = await Like.create({
            userId: req.body.userId,
            postId: req.body.postId
        })
        res.json(like)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getAllLikesByPostId,
    getAllLikesByUserId,
    getCountFromLike,
    getAllLikesByUserIdAndPostId,
    deleteLike,
    postLike
}