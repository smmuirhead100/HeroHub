const express = require('express')
const router = express.Router()
const UserModel = require('../models/Users')
const getResponse = require('../openAi/OpenAI')



router.post("/getResponse", async (req, res) => {
    const character = req.body.character
    const prompt = req.body.prompt
    const returnText = await(getResponse(character, prompt))
    console.log(returnText)
    res.send(returnText)
})

module.exports = router