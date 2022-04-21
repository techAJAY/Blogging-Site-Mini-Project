const req = require("express/lib/request")
const productModel = require("../models/productModel")

const createproduct= async function(req, res) {
    let p =req.body
    let c =await productModel.create(p)
    res.send({data:c})
}


module.exports.createproduct=createproduct