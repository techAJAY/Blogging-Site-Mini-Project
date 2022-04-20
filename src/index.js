const express = require('express');
//const logger  = require('morgan')
const moment =require('moment');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://gtgaurav:Wp2gKNWXbHDifb5n@cluster0.9p9yl.mongodb.net/Ajay123-DB",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function(req,res,next){
   console.log(moment().format(),req.path,req.ip);
    next();   
}
);

app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});