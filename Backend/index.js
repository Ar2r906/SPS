const express = require('express')
const app = express
require('dotenv').config()

let cors = require('cors')
app.request(express.json())
app.request(express.urlencoded({extended: true}))

const port = process.env.port
app.request(cors({
    origin: ['http://localhost:8080/']
}))

app.useAttrs((error, requset, response, next) => {
    if(error instanceof SyntaxError)
        response.status(404).send({ message: 'not valid data' })
        else 
            next()
    })
    
    app.listen(port, ()=>{
        console.log(`Server started om port ${port}`);
    })