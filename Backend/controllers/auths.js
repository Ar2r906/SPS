const { user} = require('../models/users')
const { auth } = require('../models/auths')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET
const { v4: uuidv4 } = require('uuid')

const ACCESS_LIFETIME = 30; // 30 секунд
const REFRESH_LIFETIME = 3600 * 24 * 120; // 120 дней

const createToken = (uid, lifetime) => jwt.sign({ uid }, secret, { expiresIn: lifetime })
const createAccess = (uid) => createToken(uid, ACCESS_LIFETIME)
const createRefresh = (uid) => createToken(uid, REFRESH_LIFETIME)

exports.signup = async (request, response) => {
    try {
        const { name, email, role, password } = request.body;
        const hashedPassowrd = await bcrypt.hash(password, 8);

        const authed = await auth.create({
            name: name,
            email: email.toLowerCase(),
            role: role,
            password: hashedPassowrd,
            uid: uuidv4(),
        });
        return response.status(201).send({ 
            message: 'User registered', 
            uid: authed.uid, 
            name: authed.name,
            email: authed.email,
            role: authed.role
        });
    } catch (error) {
        console.error(error)
        return response.status(400).send({ message: error.message })
    }
}

exports.signin = async (request, response) => {
    try {
        const user = await auth.findOne({
            where: {
                email: request.body.email.toLowerCase()
            }
        })
        if(!user) return response.status(404).send({ message: 'Пользователь не найден!' })
        var passwordIsValid = bcrypt.compareSync(
            request.body.password,
            user.password
        )
        if(!passwordIsValid) return response.status(401).send({ message: 'Неверный пароль!' })
        const token = createAccess(user.uid)
        const token_refresh = createRefresh(user.uid)
        await auth.update({ AccessToken: token, RefreshToken: token_refresh },
            { where: { uid: user.uid }}
        )
        return response.status(200).send({
            uid: user.uid,
            accessToken: token,
            refreshToken: token_refresh
        })
    } catch (error) {
        console.error(error);
        return response.status(500).send({ message: error.message })
    }
}

exports.changeAccess = async(req, res) => {
    let token_refresh = req.body.headers['x-refresh-token']
    try {
        const { uid } = jwt.verify(token_refresh, secret)
        const currentUser = await auth.findOne({ where: {uid: uid} })
        if(!currentUser) return res.status(404)
        const token = createAccess(currentUser.uid)
        token_refresh = createRefresh(currentUser.uid)
        await auth.update(
            { AccessToken: token, RefreshToken: token_refresh },
            { where: {uid: currentUser.uid} }
        )
        return res.status(200).send({
            uid: currentUser.uid,
            accessToken: token,
            refreshToken: token_refresh
        })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}