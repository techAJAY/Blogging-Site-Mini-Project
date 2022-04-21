const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")
const UserController = require("../controllers/usercontroller2")
const productController = require("../controllers/productcontroller")
const orderController = require("../controllers/ordercontroller")
const cmw = require("../middlewares/commonMiddelwares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createuser', cmw.mid1, UserController.createuser)

router.post('/createuser2', cmw.mid2, UserController.createuser2)

router.post('/createproduct', cmw.mid1, productController.createproduct)

router.post('/createorder', cmw.mid1, orderController.createorder)

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;