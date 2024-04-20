const jwt = require('jsonwebtoken')
const secret = process.env.secret;

 const adminAuth = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if(token) {
        jwt.verify(token, secret, function(err, decodedToken) {
            if(err) return res.status(401).send({ message: 'Not authorized' });
            else {
                if(decodedToken.role != 'admin') {
                    return res.status(401).send({ message: 'Not autorized' });
                } else {
                    next();
                }
            }
        });
    } else {
        return res.status(401).send({ message: 'Not authorized, token not available' });
    }
}

const admin = {
    adminAuth
}

module.exports = admin