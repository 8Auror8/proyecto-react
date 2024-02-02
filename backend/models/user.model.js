const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    surname:{type:String, required: false},
    email:{type:String, required: true},
    age:{type:Number, required: false},
    role:{type:String, required: false}
})

module.exports = mongoose.model('Users', userSchema)