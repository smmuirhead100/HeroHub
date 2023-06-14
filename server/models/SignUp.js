const mongoose = require('mongoose')

const SignUp = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String, 
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true
    }
})

const SignUpModel = mongoose.model("SignUp", UserSchema)

module.exports = SignupModel