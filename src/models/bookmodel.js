const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String, 
        required: true
    },
    year:{type:Number, default:2021},
    authorName: String, 
    // tags: [String],
    
    stockAvaiable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:Number,
    //sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
