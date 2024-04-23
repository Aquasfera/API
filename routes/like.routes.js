const express = require('express')
const router = express.Router()
const Like = require('../models/like.js')
const {
    getAllLikesByPostId,
    getAllLikesByUserId,
    getCountFromLike,
    getAllLikesByUserIdAndPostId,
    postLike,
    deleteLike
} = require('../controllers/like.controller')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller')
const checkToken = require('../middleware/token.js')
const resize = require('../middleware/resize.js')
router.get('/like', async(req,res) => await readAllItems(req,res,Like))
router.get('/like/post/:postId', async(req,res) => await getAllLikesByPostId(req,res))
router.get('/like/user/:userId', async(req,res) => await getAllLikesByUserId(req,res))
router.get('/like/user/:userId/post/:postId', async(req,res) => await getAllLikesByUserIdAndPostId(req,res))
router.get('/like/count/:postId', async(req,res) => await getCountFromLike(req,res))
router.post('/like', checkToken,async(req,res) => await postLike(req,res))
router.put('/like/:id',checkToken, async(req,res) => await updateItem(req,res,Like))
router.delete('/like/user/:userId/post/:postId',checkToken, async(req,res) => await deleteLike(req,res))

module.exports = router