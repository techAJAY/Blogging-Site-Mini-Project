let printdate = function(){
    let currentdate = new Date()
    console.log("Today date of this month is:",currentdate.getDate());
}

let printmonth = function(){
    let currentmonth = new Date()
    console.log("Running month is:",currentmonth.getMonth()+1);
}

let getBatchinfo = function(){
    console.log('uranium, W2D4, the topic for today is Nodejs module system')
}


module.exports.todaydate  = printdate
module.exports.todaymonth = printmonth
module.exports.info       = getBatchinfo