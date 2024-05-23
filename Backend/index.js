const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT
const auths_routes = require('./routes/auths')
const users_routes = require('./routes/users')
const workouts_routes = require('./routes/workouts')
const { error } = require('console')
const bodyParser = require('body-parser')

app.use(cors({ 
    origin: ['http://localhost:8080'] 
}));
app.use(bodyParser.json());

app.use('/api/auth', auths_routes)
app.use('/api/users', users_routes)
app.use('/api/workouts', workouts_routes)

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError)
        response.status(400).send({ message: 'Не верные данные' })
    else next(error)
})