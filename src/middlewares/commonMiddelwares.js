
const mid1= function ( req, res, next) {
    if (req.headers.isfreeappuser) {
        next();
    }
    else{
        res.send({msg:"isfreeapppuser is not present in headers"})
    }
}
const mid2= function ( req, res, next) {
    req['isfreeappuser']="true"
    next();
}

module.exports.mid1= mid1
module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4