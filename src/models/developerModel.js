const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
       
         name:String,
        gender:[String],
        percentage:Number,
        batch: {
           type:ObjectId,
           ref:"batches"
        },

}, { timestamps: true });


module.exports = mongoose.model('developers', developerSchema)//books    






