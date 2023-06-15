const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const home = require('./routes/login')
const chat = require('./routes/chat')

//parse JSON
app.use(express.json())

//Allow CORS
app.use(cors())

//Routes
app.use('/login', home)
app.use('/chat', chat)

//Connect to MongoDB
async function connect() {
    try {
        mongoose.connect(process.env.MONGO_KEY)
        console.log('connected to MongoDB')
    } catch (error) {
        console.log(`reached an error: ${error}`)
    }
}

//Start Server
connect()
app.listen(3001, () => {
    console.log('server running on port 3001.')
})