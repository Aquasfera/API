const jwt = require('jsonwebtoken')
const SECRET_KEY = 'es-una-clave-secreta'

const checkToken = (req, res, next) => {
    const token = req.cookies?.token
    const token2 = req.body?.token
    console.log(token2)
    if (!token2) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    try {
        const decodedToken = jwt.verify(token2, SECRET_KEY)
        req.userId = decodedToken.userId
        console.log('ENTRA')
        console.log('esto es  token',req.id)
        console.log('decodedToken', decodedToken)
        console.log('esto es  token 2',token2)
        next()
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}
module.exports = checkToken