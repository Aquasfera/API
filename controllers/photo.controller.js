
const Photo = require('../models/photo.js')

const getAllDataByURL = async (req, res) => {
    try {
        const allData = await Photo.findOne({
            where: { name: req.params.name },
        })
        if (!allData) {
           return res.status(404).json({ message: `Photo with ${req.params.name} data not found` })
        }
        res.json(allData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPhotoByAnimalID = async (req, res) => {
    try{
        const allData = await Photo.findAll({
            where: { animal_id: req.params.animal_id },
            exclude: ['createdAt','updatedAt','animal_id']
        })
        if(!allData){
            return res.status(404).json({message:`Photo with ${req.params.animal_id} data not found`})
        }
        res.json(allData)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports = {
    getAllDataByURL
    ,getPhotoByAnimalID
}