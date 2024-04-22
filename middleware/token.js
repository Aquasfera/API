const jwt = require('jsonwebtoken')
const SECRET_KEY = 'es-una-clave-secreta'

const checkToken = (req, res, next) => {
    // const token = req.cookies?.token
    const token2 = req.body?.token
    console.log(token2)
    if (!token2) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    try {
        const decodedToken = jwt.verify(token2, SECRET_KEY)
        req.userId = decodedToken.userId
        next()
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}
module.exports = checkToken