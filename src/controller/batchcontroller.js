const batchModel= require("../models/batchModel")

const createbatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
    
}


module.exports.createbatch= createbatch