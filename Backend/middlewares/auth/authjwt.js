const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET

const verifyToken = (request, response, next) => {
    let token = request.headers["x-access-token"]

    if(!token) return response.status(403).send({ 
        message: 'Токен не прредоставлен' 
    });

    jwt.verify(token, secret, function(err, decoded) {
        if(err) return response.status(401).send({ 
            message: 'Не авторизован' 
        });
        request.userUid = decoded.uid
        next()
    })
}

const authJwt = {
    verifyToken
}

module.exports = authJwt