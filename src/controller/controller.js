let sumarr = function(req,res){
    let x =req.body.number
    console.log(x)
    let arr =[1,2,5,7,8]
    arr.push(x)
    res.send({msg:"hi",data:arr})
}

module.exports.sumarr = sumarr