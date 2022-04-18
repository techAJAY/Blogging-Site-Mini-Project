const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname:String,
    authorname:String,
    tags:[ String ],

    date: {
         type:String,
         default:Date.now
    },
    ispublished:Boolean,
    prices:{
        indianprice:String,
        europeanprice:String
    },
    sales:{
        type:Number,
        default:10
    },

}, { timestamps: true });

//data type:
//number,string,array,boolean,date

module.exports = mongoose.model('book', bookSchema) //books