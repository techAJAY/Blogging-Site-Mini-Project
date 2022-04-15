const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname:String,
    authername:String,
    tags:[ String ],

    date: {
         type:String,
         default:Date.now
    },
    ispublished:Boolean

}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //books