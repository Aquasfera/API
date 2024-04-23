const express = require("express")
const router = express.Router()
const {
    register,
    login,
    checkCookie,
    logout
} = require('../controllers/user.controller.js')
const User = require('../models/user.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const checkToken = require('../middleware/token.js')

router.get('/user',async(req,res) => await readAllItems(req,res,User))
router.get('/user/:id',async(req,res) => await readItem(req,res,User))
router.post('/refresh', checkToken, async(req,res) => await checkCookie(req,res,User))
router.post('/login', async(req,res) => await login(req,res,User))
router.post('/register', async(req,res) => await register(req,res,User))
router.post('/logout',checkToken, async(req,res) => await logout(req,res))
router.put('/user/:id', checkToken, async(req,res) => updateItem(req,res,User))
router.delete('/user', checkToken, async(req,res) => deleteItem(req,res,User))

module.exports = router