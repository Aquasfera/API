const express = require("express")
const router = express.Router()

const Animal = require('../models/animal.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const {
    getAllData,
    getAllDataById
} = require('../controllers/animal.controller.js')

const checkToken = require('../middleware/token.js')

router.get('/animal', async(req,res) => await getAllData(req,res,Animal))
router.get('/animal/:id', async(req,res) => await getAllDataById(req,res,Animal))
router.post('/animal', checkToken, async(req,res) => await createItem(req,res,Animal))
router.put('/animal/:id', checkToken, async(req,res) => await updateItem(req,res,Animal))
router.delete('/animal/:id', checkToken, async(req,res) => await deleteItem(req,res,Animal))

module.exports = router