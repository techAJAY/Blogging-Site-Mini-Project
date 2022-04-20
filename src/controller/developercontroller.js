const developerModel= require("../models/developerModel")
const batchModel = require("../models/batchModel")

const createdeveloper= async function (req, res) {
      let developer = req.body
       let developers = await developerModel.create(developer)
       res.send({data: developers})
   
}

    const fetchsalldev = async function(req,res){
    let alldev   =   await developerModel.find({gender:female},{percentage:{$gte:70}})
    res.send({data:alldev})
}
    const developers = async function(req,res){

    let value = req.query
    let tem ={ }
    tem['$gte']
    console.log(value.percentage)
    let alldev  =   await developerModel.find({percentage:{}}).populate('batch')
    console.log(alldev)
     res.send({data:alldev})
}



  module.exports.createdeveloper = createdeveloper
  module.exports.fetchsalldev  = fetchsalldev
  module.exports.developers  = developers