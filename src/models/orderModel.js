const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderschema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "userr"
    },
    productId: {
        type: ObjectId,
        ref: "product"
    },
    amount: Number,
    isfreeappuser: Boolean,
    date: Date

}, { timestamps: true });


module.exports = mongoose.model('order', orderschema) //orders