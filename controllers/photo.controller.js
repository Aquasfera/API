
const Photo = require('../models/photo.js')

const getAllDataByURL = async (req, res) => {
    try {
        const allData = await Photo.findOne({
            where: { name: req.params.name },
        })
        if (!allData) {
           return res.status(404).json({ message: "Photo not found" })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getAllDataByURL
}