const express = require("express")
const router = express.Router()
const date = new Date()
const time = date.getTime() 
const Photo = require('../models/photo.js')
const {
    createItem,
    updateItem,
    deleteItem,
    readAllItems,
    readItem
} = require('../controllers/generics.controller.js')
const {
    getAllDataByURL
} = require('../controllers/photo.controller.js')
const checkToken = require('../middleware/token.js')
const resize = require('../middleware/resize.js')
router.get('/photo', async (req, res) => await readAllItems(req, res, Photo))
router.get('/photo/:id', async (req, res) => await readItem(req, res, Photo))
router.get('/photo/url/:name', async (req, res) => await getAllDataByURL(req, res, Photo))
router.post('/photo', [resize,checkToken], async (req, res) => {
    req.body.url = time + req.file.filename
    // req.body.name = req.file.filename+ '.jpg'
    await createItem(req, res, Photo)
})
router.put('/photo/:id', checkToken, async (req, res) => await updateItem(req, res, Photo))
router.delete('/photo/:id', checkToken, async (req, res) => await deleteItem(req, res, Photo))

module.exports = router