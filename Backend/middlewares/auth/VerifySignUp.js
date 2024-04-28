const { auth } = require('../../models/auths')

checkDuplicateEmail = async(request, response, next) => {
    console.log(request.body);
    const user = await auth.findOne({ 
        where: { email: request.body.email.toLowerCase() }
    });

    console.log(user)
    if (user) return response.status(413).send({ 
        message: 'Email уже используется!'
    })
    next()
};

const verifySignUp = {
    checkDuplicateEmail
}

module.exports = verifySignUp