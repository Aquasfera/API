const SECRET_KEY = 'es-una-clave-secreta'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res, Model) => {
    const { username, password } = req.body
    console.log( username, password)
    try {
        const user = await Model.findOne({ where: { username } })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(404).json({ error: "Incorrect Password" })
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '2h' })
        return  res.status(200).json(token)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const register = async (req, res, Model) => {
    try {
        let { username, password, avatar, active } = req.body
        console.log(avatar)
        if (!avatar){
            avatar = 0
        }
        console.log(avatar)
        if (!username || !password || !avatar || !active) {
            return res.status(400).json({ error: 'Data is empty' })
        }
        const existingUser = await Model.findOne({ where: { username } })
        if (existingUser) {
            return res.status(400).json({ error: 'User exists' })
        }
        const passwordEncrypt = bcrypt.hashSync(password, 10)
        password = passwordEncrypt
        const user = await Model.create({ username, password, avatar, active })
        return res.status(200).json({ message: "user created" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const logout = async (req, res) => {
    return res.json({ message: 'Logout' })
}
const checkCookie = async (req, res, Model) => {
    const user = await Model.findByPk(req.userId)
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }
    return res.json({ id: user.id, username: user.username, avatar: user.avatar})
}

module.exports = {
    login,
    register,
    checkCookie,
    logout
}