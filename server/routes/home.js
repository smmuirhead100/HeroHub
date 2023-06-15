const express = require('express')
const router = express.Router()
const UserModel = require('../models/Users')

async function verifyNewUser(username) {
    const User = await UserModel.find({username})
    if (User.length === 0) { 
        return true
    } else {
        return false
    }
}

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


router.get("/getUsers", (req, res) => {
    getUsers().then((users) => {
        res. json(users)
    })
})

router.post("/createUser", async (req, res) => {
    console.log('creating user')
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

router.post("/login", async (req, res) => {
    console.log('got request...')
    const username = req.body.username
    const password = req.body.password
    const success = await getUser(username, password)
    res.json({
        success
    })
})

module.exports = router