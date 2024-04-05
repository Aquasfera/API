const express = require("express")
const router = express.Router()

const Photo = require('../models/photo.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const checkToken = require('../middleware/token.js')

router.get('/photo', async(req,res) => await readAllItems(req,res,Photo))
router.get('/photo/:id', async(req,res) => await readItem(req,res,Photo))
router.post('/photo', checkToken, async(req,res) => await createItem(req,res,Photo))
router.put('/photo/:id', checkToken, async(req,res) => await updateItem(req,res,Photo))
router.delete('/photo/:id', checkToken, async(req,res) => await deleteItem(req,res,Photo))

module.exports = router