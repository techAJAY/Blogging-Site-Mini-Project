
// const mid1= function ( req, res, next) {
//        console.log("Hi I am a middleware named Mid1")
//         logic
//         let loggedIn = false
    
//      if (loggedIn== true) { 
//              console.log( "OK LOGGED IS IS TRUE NOW")
//              next ()
//          }
//          else {
//          res.send ("Please login or register")
//          }
//      }
const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4