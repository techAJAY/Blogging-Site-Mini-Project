const express = require('express');
const router = express.Router();
const UserModel= require("../models/usermodels")
const BookModel = require("../models/bookmodels")
const usercontroller = require('../controller/usercontroller')
const bookcontroller = require('../controller/bookcontroller')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", usercontroller.createuser) 

router.get("/getUsersdata", usercontroller.getUsersdata)

router.post("/createbook", bookcontroller.createbook) 

router.get("/getbookdata", bookcontroller.getbookdata)
    

module.exports = router;