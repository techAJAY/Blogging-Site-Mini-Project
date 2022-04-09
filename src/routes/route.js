const express = require('express');
const logger = require('../logger/logger')
const printtodaydate = require('../uti/helper')
const printthismonth = require('../uti/helper')
const information   = require('../uti/helper')
const trimming      = require('../validator/formatter')
const highertolower = require('../validator/formatter')
const lowertohigher = require('../validator/formatter')
const lodash        = require('lodash');
const newcontroller = require('../controller/controller');

const { route } = require('express/lib/application');
const res = require('express/lib/response');
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
    

     let indexing =  ["horror" , "The Shining"] ["drama","Titanic"] ["thriller","Shutter Island"] ["fantasy","Pans Labyrinth"]
    console.log("that is your key and value:",lodash.fromPairs(indexing))
    res.send('my first ever api!')
    
});

router.get('/movies', function (req, res) {

    console.log(req)
    //console.log("this is your value",req.query)
     const arr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins'] 
    
    res.send(arr)
});



router.get('/movies/:indexnumber', function (req, res) {

    const arr = ['3 idiot','kyo ki','veer zara','one'] 
    const id = req.params.indexnumber
    if (id <arr.length){
        res.send(arr[id])
        }
    else {
        res.send("use valid index")
        }
           
    
});

//route.post('/test-post3',function(req,res){
    //newcontroller.sumarr()
   // res.send({data:newcontroller})
    //route.post('/getpost-me',function(req,res){
       // let data  =req.body
       // console.log(data)
       // res.send("hi how are you")


module.exports = router;
// adding this comment for no reason