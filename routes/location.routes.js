const express = require("express")
const router = express.Router()
const Location = require('../models/location.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const checkToken = require('../middleware/token.js')

router.get('/location', async(req,res) => await readAllItems(req,res,Location))
router.get('/location/:id',  async(req,res) => await readItem(req,res,Location))
router.post('/location', checkToken, async(req,res) => await createItem(req,res,Location))
router.put('/location/:id', checkToken, async(req,res) => await updateItem(req,res,Location))
router.delete('/location/:id', checkToken, async(req,res) => await deleteItem(req,res,Location))

module.exports = router