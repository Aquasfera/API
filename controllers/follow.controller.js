
const Follow = require('../models/follow.js')

const getFollowersById = async (req, res) => {
    try {
        const allData = await Follow.findAll({
            where: { followerId: req.params.followerId },
        })
        if (!allData) {
            return res.status(404).json({ message: `All Followers with ${req.params.followerId} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getFollowsById = async (req, res) => {
    try {
        const allData = await Follow.findAll({
            where: { followedId: req.params.followedId }
        })
        if (!allData) {
            return res.status(404).json({ message: `All likes with ${req.params.followedId} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getCountFromFollowersId = async (req, res) => {
    try {
        const allData = await Follow.count({
            where: { followerId: req.params.followerId }
        })
        if (!allData) {
            return res.json(0)
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCountFromFollowedId = async (req, res) => {
    try {
        const allData = await Follow.count({
            where: { followedId: req.params.followedId }
        })
        if (!allData) {
            return res.json(0)
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getFollowersByIdAndFollowedId = async (req, res) => {
    try {
        const allData = await Follow.findOne({
            where: { followerId: req.params.followerId,
                     followedId: req.params.followedId}
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
const postFollower = async (req, res) => {
    try {
        const followerExist = await Follow.findOne({
            where: {
                followedId: req.body.followedId,
                followerId: req.body.followerId
            }
        })
        
        if (followerExist) {
            return res.status(400).json({ message: `Follower already exist` })
        }
       
        const follow = await Follow.create({
            followedId: req.body.followedId,
            followerId: req.body.followerId
        })
        
        res.json(follow)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getCountFromFollowedId,
    getCountFromFollowersId,
    getFollowersById,
    getFollowsById,
    getFollowersByIdAndFollowedId,
    postFollower
}