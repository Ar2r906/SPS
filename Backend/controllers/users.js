const { user } = require('../models/users')

const getUserByUid = async(req, res) => {
    try {
        const currenUser = await user.findOne({ where: { uid: req.userUid }})
        if(!currenUser) return res.status(404)
        return res.json(currenUser)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {
    getUserByUid
}