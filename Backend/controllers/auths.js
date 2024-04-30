const { user } = require('../models/users.js')
const { auth } = require('../models/auths.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET
const { v4: uuidv4 } = require('uuid')

const ACCESS_LIFETIME = 30; // 30 секунд
const REFRESH_LIFETIME = 60 * 60 * 24 * 60; // 2 месяца

const createToken = (uid, lifetime) => jwt.sign({ uid }, secret, { expiresIn: lifetime })
const createAccess = (uid) => createToken(uid, ACCESS_LIFETIME)
const createRefresh = (uid) => createToken(uid, REFRESH_LIFETIME)

const isPasswordValid = (password) => {
    if(password.length < 8) return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/
    return regex.test(password);
}

const admin_name = 'Headcoach';
const admin_email = 'headcoach@headcoach.headcoach'
const admin_password = 'headcoach@headcoach.headcoach'
const admin_role = 'headcoach'

// const admin = auth.create({
//     email: admin_email.toLowerCase(),
//     role: admin_role,
//     name: admin_name,
//     password: bcrypt.hashSync(admin_password, 8),
//     uid: uuidv4()
// })

// const createdAdmin = user.create({
//     uid: admin.uid,
//     name: admin_name, 
//     email: admin_email, 
//     role: admin_role 
// })

exports.signup = async(request, response) => {
    const { email, password, name, role } = request.body;
    
    // if(!isPasswordValid(password)) {
    //     return response.status(400).send({
    //         message: 'Пароль не соответствует требованиям безопасности'
    //     })
    // };

    try {
        const hashedPassword = bcrypt.hashSync(password, 8);

        const authed = await auth.create({
            email: email.toLowerCase(),
            role: role,
            name: name,
            password: hashedPassword,
            uid: uuidv4(),
        });

        const createdUser = await user.create({
            uid: authed.uid,
            email: authed.email,
            name: authed.name,
            role: authed.role,
        });

        console.log({ message: `Регистрация пользователя ${authed.email} прошла успешно` })
        return response.status(201).send({ 
            message: 'Пользователь успешно зарегистрирован!', 
            email: authed.email, 
        });
    } catch (error) {
        return response.status(401).send({
            message: error.message
        });
    }
}

exports.signin = async(request, response) => {
    try {
        const user = await auth.findOne({
            where: {
                email: request.body.email.toLowerCase()
            }
        })

        if (!user) return response.status(403).send({ error: 'Введены невенрые данные' })
        var passwordIsValid = bcrypt.compareSync(
            request.body.password,
            user.password
        )

        if (!passwordIsValid) return response.status(403).send({ error: 'Введены неверные данные' })

        const token = createAccess(user.uid)
        const token_refresh = createRefresh(user.uid)

        await auth.update({AccessToken: token, RefreshToken: token_refresh},
            {where: {uid: user.uid}}
        )

        console.log({ message: `Пользователь ${user.email} авторизован` })

        return response.status(200).send({
            message: 'Успешеый вход!',
            uid: user.uid,
            accessToken: token,
            refreshToken: token_refresh,
            name: user.name,
            email: user.email,
            role: user.role,
        })
    } catch (error) {
        return response.status(500).send({ 
            error: 'Произошла ошибка при входе в систему' 
        })
    }
}

exports.changeAccess = async(request, response) => {
    let token_refresh = request.body.headers['x-refresh-token']

    try {
        const { uid } = jwt.verify(token_refresh, secret)
        const currentUser = await auth.findOne({
            where: {uid: uid}
        });

        if(!currentUser) return response.status(404)

        const token = createAccess(currentUser.uid)
        token_refresh = createRefresh(currentUser.uid)

        await auth.update({AccessToken: token, RefreshToken: token_refresh},
            {where: {uid: currentUser.uid}}
        );

        return response.status(200).send({
            message: 'Успешное обновление токена',
            uid: currentUser.uid,
            accessToken: token,
            refreshToken: token_refresh
        })
    } catch (error) {
        return response.status(500).send({ 
            message: error.message 
        });
    }
}