const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('dotenv').config()
const UserModel = require('./models/Users')
const cors = require('cors')
const getResponse = require('./openAi/OpenAI')

app.use(express.json())
app.use(cors())

async function getUser(username, password){ 
    console.log('searching for user')
    const User = await UserModel.find({username})
    if (User.length == 0) { 
        return false
    } else {
        if (User[0].password == password) {
            return true
        } else {
            return false
        }}
}

async function getUsers(){
    const Users = await UserModel.find({});
    return Users;
}

async function verifyNewUser(username) {
    const User = await UserModel.find({username})
    if (User.length === 0) { 
        return true
    } else {
        return false
    }
}

async function connect() {
    try {
        mongoose.connect(process.env.MONGO_KEY)
        console.log('connected to MongoDB')
    } catch (error) {
        console.log(`reached an error: ${error}`)
    }
}

app.get("/getUsers", (req, res) => {
    getUsers().then((users) => {
        res.json(users)
    })
})

app.post("/createUser", async (req, res) => {
    const user = req.body
    const verified = await verifyNewUser(user.username)
    console.log(verified)
    if (verified) {
        const newUser = new UserModel(user)
        await newUser.save()
        res.json({
            success: true
        })
    } else {
        res.json({
            success: false
        })
    }
})

app.post("/getResponse", async (req, res) => {
    const character = req.body.character
    const prompt = req.body.prompt
    const returnText = await(getResponse(character, prompt))
    console.log(returnText)
    res.send(returnText)
})

app.post("/login", async (req, res) => {
    console.log('got request...')
    const username = req.body.username
    const password = req.body.password
    const success = await getUser(username, password)
    res.json({
        success
    })
    
})

connect()
app.listen(3001, () => {
    console.log('server running on port 3001.')
})