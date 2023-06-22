const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    image: {
        type: String,
        required: true,
    }, 
    description: {
        type: String, 
        required: true
    },
})

const CharacterModel = mongoose.model("characters", CharacterSchema)

module.exports = CharacterModel