const express = require("express")
const router = express.Router()

const Specie = require('../models/specie.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const checkToken = require('../middleware/token.js')

router.get('/specie', async(req,res) => await readAllItems(req,res,Specie))
router.get('/specie/:id', async(req,res) => await readItem(req,res,Specie))
router.post('/specie', checkToken, async(req,res) => await createItem(req,res,Specie))
router.put('/specie/:id', checkToken, async(req,res) => await updateItem(req,res,Specie))
router.delete('/specie/:id', checkToken, async(req,res) => await deleteItem(req,res,Specie))

module.exports = router