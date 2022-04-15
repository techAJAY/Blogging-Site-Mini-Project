
const bookModel = require("../models/bookmodels")

const createbook= async function(req,res){
    let data = req.body
     //console.log(data)
    let savedata  = await bookModel.create(data)
    res.send({msg:savedata})
   

}
const getbookdata  =async (req,res) => {
    let alluserdata = await bookModel.find()
    res.send({msg:alluserdata})

}

module.exports.createbook = createbook
module.exports.getbookdata = getbookdata