const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{type:String, required: true},
    author:{type:String, required: true},
    pages:{type:Number, required: false},
    image:{type:String, required: false},
    editorial:{type:String, required: false}
})

module.exports = mongoose.model('Books', bookSchema)