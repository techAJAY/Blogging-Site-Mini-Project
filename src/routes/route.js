const express = require('express');
const newcontroller = require('../controller/controller');

const router = express.Router();


router.post('/post-me',function(req,res){

    newcontroller.sumarr()
   res.send("hiiiclear")
        
});

route.post('/getpost-me',function(req,res){
        let data  =req.body
       console.log(data)
       res.send("hi how are you")

});
module.exports = router;
// adding this comment for no reason