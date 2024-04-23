const express = require('express')
const router = express.Router()
const Follow = require('../models/follow.js')
const {
    getCountFromFollowedId,
    getCountFromFollowersId,
    getFollowersById,
    getFollowsById,
    getFollowersByIdAndFollowedId,
    postFollower,
    deleteFollower
} = require('../controllers/follow.controller')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller')
const checkToken = require('../middleware/token.js')
router.get('/follow', async (req, res) => await readAllItems(req, res, Follow))
router.get('/follow/follower/:followerId', async (req, res) => await getFollowersById(req, res))
router.get('/follow/followed/:followedId', async (req, res) => await getFollowsById(req, res))
router.get('/follow/count/follower/:followerId', async (req, res) => await getCountFromFollowersId(req, res))
router.get('/follow/count/followed/:followedId', async (req, res) => await getCountFromFollowedId(req, res))
router.get('/follow/follower/:followerId/followed/:followedId', async (req, res) => await getFollowersByIdAndFollowedId(req, res))
router.post('/follow', checkToken, async (req, res) => await postFollower(req, res))
router.put('/follow/:id', checkToken, async (req, res) => await updateItem(req, res, Follow))
router.delete('/follow/follower/:followerId/followed/:followedId', checkToken, async (req, res) => await deleteFollower(req, res))
module.exports = router