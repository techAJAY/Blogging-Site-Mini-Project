const req = require("express/lib/request")
const userModel = require("../models/userModel2")

const createuser= async function(req, res) {
    let p =req.body
    let c = await userModel.create(p)
    res.send({data:c})
}

const createuser2= async function(req, res) {
    let p =req.body
    let c =await userModel.create(p)
    res.send({data:c})
}




module.exports.createuser = createuser
module.exports.createuser2 = createuser2