const { feedback } = require('../models/feedback')

exports.feedback = async(request, response) => {
    const { email, name, message } = request.body;

    try {
        const user_feedback = await feedback.create({
            email: email.toLowerCase(),
            name: name,
            message: message
        })
        console.log('Данные получены')
        return response.ststus(200).message({
            email: user_feedback.email,
            name: user_feedback.name,
        })
    } catch (error) {
        return response.status(500).message({
            error: 'Произошла ошибка на сервере'
        })
    }
}