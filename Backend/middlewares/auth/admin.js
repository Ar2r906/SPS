const jwt = require('jsonwebtoken')
const secret = process.env.secret;

const checkAccess = (requset, response, next) => {
    const token = requset.headers["x-access-token"]
    if(token) {
        jwt.verify(token, secret, function(err, decodedToken) {
            if(err) return response.status(401).send({ message: 'Не авторизован' });
            else {
                if(decodedToken.role != 'admin') {
                    return response.status(401).send({ message: 'Не авторизован' });
                } else {
                    next();
                }
            }
        });
    } else {
        return response.status(401).send({ message: 'Не авторизован, токен не верный' });
    }
}

const admin = {
    checkAccess
}

module.exports = admin