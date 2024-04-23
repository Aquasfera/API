const path = require('path');
const multer = require('multer');
const SharpMulter = require('sharp-multer');


const newFilenameFunction = (og_filename, options) => {
    const date = new Date()
    const dateNow = date.getTime()
    console.log(og_filename)
    const newname =
        og_filename.split(".").slice(0, -1).join(".") +
        dateNow +
        "." +
        options.fileFormat;
    console.log(newname)
    return newname;
};

const storage = SharpMulter({
    destination: (req, file, callback) => callback(null, './data/photos'),
    imageOptions: {
        fileFormat: 'webp',
        quality: 80,
        resize: {
            width: 1280, height: 720,
        }
    },
    filename: newFilenameFunction,
})
const upload = multer({ storage })

module.exports = upload.single('url')