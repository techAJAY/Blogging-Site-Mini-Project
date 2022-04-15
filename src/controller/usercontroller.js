const UserModel= require("../models/usermodels")

const createuser= async function(req,res){
    let data = req.body
     //console.log(data)
    let savedata  = await UserModel.create(data)
    res.send({msg:savedata})
   

}
const getUsersdata  =async (req,res) => {
    let alluserdata = await UserModel.find()
    res.send({msg:alluserdata})

}

module.exports.createuser = createuser
module.exports.getUsersdata = getUsersdata