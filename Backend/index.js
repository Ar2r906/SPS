const express = require('express')
const app = express()
require('dotenv').config()
let cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.port
const auths_routes = reqiure('./routes/auths.js')
const users_routes = require('./routes/users')

app.use(cors({
    origin: ['http://localhost:8080/']
}))

app.use('/api/auth', auths_routes)
app.use('/api/user', users_routes)

app.use((error, request, response, next) => {
    if(error instanceof SyntaxError)
        response.status(404).send({ message: 'not valid data' })
    else 
        next()
})

app.listen(port, ()=>{
    console.log(`Server started om port ${port}`);
})