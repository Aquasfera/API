const jwt = require('jsonwebtoken')
const SECRET_KEY = 'es-una-clave-secreta'

const checkToken = (req,res,next) => {
    const token = req.cookies?.token
    console.log(token)
    if(!token){
        return res.status(401).json({error: 'Unauthorized'})
    }
    try{
        const decodedToken = jwt.verify(token,SECRET_KEY)
        req.id = decodedToken.id
        next()
    }catch(error){
        return res.status(401).json({error: error.message})
    }
}
module.exports = checkToken