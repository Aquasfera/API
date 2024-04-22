const path = require('path');
const multer = require('multer');
const SharpMulter = require('sharp-multer');

const storage = SharpMulter({
    destination: (req, file, callback) => callback(null, './data/photos'),
    filename: (req, file, callback) => {
        // Extract the original filename and extension
        const originalName = path.parse(file.originalname).name;
        const extension = path.extname(file.originalname);

        // Generate a unique identifier (consider using a stronger alternative like crypto.randomUUID())
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

        // Allow customization of the new filename format in the request body (optional)
        const newFilename = req.body.newFilename || `${originalName}-${uniqueSuffix}${extension}`;

        callback(null, newFilename);
    },
    imageOptions: {
        fileFormat: 'webp',
        quality: 80,
        resize: {
            width: 1280, height: 720,
        },

    }
})
const upload = multer({ storage })

module.exports = upload.single('url')