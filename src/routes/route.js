const express = require('express');
const logger = require('../logger/logger')
const printtodaydate = require('../uti/helper')
const printthismonth = require('../uti/helper')
const information   = require('../uti/helper')
const trimming      = require('../validator/formatter')
const highertolower = require('../validator/formatter')
const lowertohigher = require('../validator/formatter')
const lodash        = require('lodash')

const router = express.Router();

router.get('/hello', function (req, res) {
    //console.log('our server is:',logger.endpoint)
    logger.mywelcome()
    printtodaydate.todaydate()
    printthismonth.todaymonth()
    information.info()
    trimming.trimfunction()
    highertolower.hightolow()
    lowertohigher.lowtohigh()

    let  month = ['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
    let  array = lodash.chunk(month,3)
    console.log("your all months are:",array)

    let oddnumber = [1,3,5,7,9,11,13,15,17,19]
    console.log("this are your oddnumbers:",lodash.tail(oddnumber))

    let a = [1,2,5,6]
    let b= [4,7,8,3]
    let c =[3,2,7,0]
    let d = [1,6,9,2]
    let e = [1,4,6,0]
    console.log("your unique number are:",lodash.union(a,b,c,d,e))
    

   // let indexing =  ["horror" , "The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
   // console.log("that is your key and value:",lodash.fromPairs(indexing))
    res.send('my first ever api!')
    
});

router.get('/test-me', function (req, res) {
    console.log("--------------------------")
    console.log(req)
    console.log("this is your value",req.query)
    console.log("--------------------------")
    
    res.send('My second ever api on nodejs!')
});

module.exports = router;
// adding this comment for no reason