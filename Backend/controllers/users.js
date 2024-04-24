const { user } = require('../models/users.js')
const { auth } = require('../models/auths.js')

const getUserByUid = async(request, response) => {
    try {
        const currentUser = await user.findOne({ where: { uid: request.userUid }})
        if(!currentUser) return response.status(404)
        return response.json(currentUser)
    } catch (error) {
        return response.status(500).send({ message: error.message })
    }
}

module.exports = {
    getUserByUid
}