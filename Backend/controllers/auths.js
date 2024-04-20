const { user} = require('../models/users')
const { auth } = require('../models/auths')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret
const { v4: uuidv4 } = require('uuid')

const ACCESS_LIFETIME = 30; // 30 секунд
const REFRESH_LIFETIME = 3600 * 24 * 60; // 60 дней

const createToken = (uid, lifetime) => jwt.sign({ uid }, secret, { expiresIn: lifetime })
const createAccess = (uid) => createToken(uid, ACCESS_LIFETIME)
const createRefresh = (uid) => createToken(uid, REFRESH_LIFETIME)

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

exports.signin = async (req, res) => {
    try {
        const user = await auth.findOne({
            where: {
                email: req.body.email.toLowerCase()
            }
        })
        if(!user) return res.status(404).send({ messae: 'User not found!' })
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!passwordIsValid) return res.status(414).send({ message: 'Invalid password!' })
        const token = createAccess(user.uid)
        const token_refresh = createRefresh(user.uid)
        await auth.update({ AccessToken: token, RefreshToken: token_refresh },
            { where: { uid: user.uid }}
        )
        return res.status(200).send({
            uid: user.uid,
            accessToken: token,
            refreshToken: token_refresh
        })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

exports.update = async(req, res, next) => {
    const { role, uid } = req.body
    // first
    if(role && uid) {
        //second
        if(role === 'admin') {
            await auth.findByUid(uid).then((auth) => {
                // third
                if(auth.role !== 'admin') {
                    auth.role = role;
                    auth.save((err) => {
                        if(err) {
                            res.status(400).send({ message: 'An error occurred', error: err.message });
                            process.exit(1);
                        }
                        res.status(201).send({ message: 'Update successfull', auth });
                    });
                } else {
                    res.status(400).send({ message: 'User is already an Admin' })
                }
            })
            .catch((error) => {
                res.status(400).send({ message: 'An error occurred', error: error.message });
            });
        } else {
            res.status(400).send({ message: 'Role is not admin' });
        };
    } else {
        res.status(400).send({ message: "Role ot Uid not present"})
    }
};

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