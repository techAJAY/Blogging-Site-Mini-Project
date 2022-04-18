const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    authorId: {
        type: ObjectId,
        ref: "newAuthor"
    },
    
    price: Number,
    ratings: Number,
    PublisherId: {
        type: ObjectId,
        ref: "Publisher",
    }


}, { timestamps: true });


module.exports = mongoose.model('Newbook', bookSchema)//books