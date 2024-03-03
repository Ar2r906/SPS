const { get_auth_table } = require('../../Front/src/models/auths')
const { user } = require('../../Front/src/models/auths')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret
const { v4: uuidv4 } = require('uuid')

exports.signup = (req, res) => {
    get_auth_table()
    auth.create({
        email: req.body.email.toLowerCase(),
        role: 'user',
        password: bcrypt.hashSync(req.body.password, 8),
        uid: uuidv4(),
    }).then(async function (current_user) {
        await user.create({
            uid: current_user.id,
            name: req.body.name,
            likes: 0
        })
        res.send({ message: 'registred', uid: current_user.id })
    }).catch(err => {
        res.status(400).send({ message: err.message })
    })
}