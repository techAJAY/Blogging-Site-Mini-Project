let trim = function() {
    console.log("this is you trim function value:" + "       function up        ".trim()+ ".")
}



let changetolower = function(){
    console.log("your lower value is:","AJAY PATEL".toLowerCase())
}


let changetohigher = function(){
    console.log("your lower value is:","AJAY PATEL".toUpperCase())
}


module.exports.trimfunction = trim
module.exports.hightolow    = changetolower
module.exports.lowtohigh    = changetohigher