const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const testJwtRouter = require("./controllers/test-jwt")
const authRouter = require('./controllers/auth')
const userRouter = require("./controllers/user")
// Middlewares

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=> {
    console.log(`Connected to mongodb on ${mongoose.connection.name}`)
})

app.use(cors()) // Allows other API or sites to connect to our API
app.use(express.json()) // Accept JSON in req.body
app.use(morgan('dev')) // logs request to the console

// ROUTES
app.use('/test-jwt', testJwtRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)


app.listen(3000, ()=> console.log('Server running on port 3000'))