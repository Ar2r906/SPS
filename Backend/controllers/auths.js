const { user} = require('../models/users')
const { auth } = require('../models/auths')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret
const { v4: uuidv4 } = require('uuid')

exports.signup = async (req, res) => {
    try {
        const authed = await auth.create({
            email: req.body.email.toLowerCase(),
            role: 'user',
            password: bcrypt.hashSync(req.body.password, 8),
            uid: uuidv4(),
        })
        const createdUser = await user.create({
            uid: authed.uid,
            name: req.body.name,
        })
        return res.status(201).send({ message: 'registred', uid: createdUser.uid })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}