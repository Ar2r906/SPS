const {get_auth_table, auth} = require('') // тут надо указать auth из model front

checkDuplicateEmail = (req, res, next) => {
    get_auth_table();
    auth.findOne( {
        where: {
            email: req.body.email.toLowerCase()
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: 'Email is already in use!'
            })
            return
        }
        next()
    })
};

const verifySignUp = {
    checkDuplicateEmail
}

module.export = verifySignUp