const path = require('path');
const multer = require('multer');
const SharpMulter = require('sharp-multer');

const storage = SharpMulter({
    destination: (req, file, callback) => callback(null, './data/photos'),
    imageOptions: {
        fileFormat: 'webp',
        quality: 80,
        resize: {
            width: 1280, height: 720,
        }
    }
})
const upload = multer({ storage })

module.exports = upload.single('url')