const SECRET_KEY = 'es-una-clave-secreta'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res, Model) => {
    const { username, password } = req.body
    console.log( username, password)
    try {
        const user = await Model.findOne({ where: { username } })
        console.log(user)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        console.log(passwordMatch)
        if (!passwordMatch) {
            return res.status(404).json({ error: "Incorrect Password" })
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '2h' })
        res.cookie('token', token, { httpOnly: false, maxAge: 7200000 })
        return res.json({ message: 'Login Correcto' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const register = async (req, res, Model) => {
    try {
        let { username, password, avatar, active } = req.body
        if (!username || !password || !avatar || !active) {
            return res.status(400).json({ error: 'Data is empty' })
        }
        const existingUser = await Model.findOne({ where: { username } })
        if (existingUser) {
            return res.status(400).json({ err: 'User exists' })
        }
        const passwordEncrypt = bcrypt.hashSync(password, 10)
        password = passwordEncrypt
        const user = await Model.create({ username, password, avatar, active })
        return res.status(200).json({ err: "user created" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const checkCookie = async (req, res, Model) => {
    const user = await Model.findOne(req.userId)
    console.log(user)
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }
    return res.json({ id: user.id, username: user.username })
}
module.exports = {
    login,
    register,
    checkCookie
}