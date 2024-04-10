const express = require('express')
const router = express.Router()
const Post = require('../models/post.js')
const {
    getAllData,
    getAllDataById,
    getPostByUser,
    getPostByAnimal
} = require('../controllers/post.controller')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller')
const checkToken = require('../middleware/token.js')
const resize = require('../middleware/resize.js')
router.get('/post', async(req,res) => await getAllData(req,res))
router.get('/post/:id', async(req,res) => await getAllDataById(req,res))
router.get('/post/user/:id', async(req,res) => await getPostByUser(req,res))
router.get('/post/animal/:id', async(req,res) => await getPostByAnimal(req,res))
router.post('/post', [resize, checkToken], async(req,res) =>{
    req.body.url = time + req.file.filename
    req.body.likes = 0
    await createItem(req,res,Post)
})
router.put('/post/:id', checkToken, async(req,res) => await updateItem(req,res,Post))
router.delete('/post/:id', checkToken, async(req,res) => await deleteItem(req,res,Post))
module.exports = router