const express = require('express');
const router = express.Router();

const developerController= require("../controller/developercontroller")
const batchController= require("../controller/batchcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createdeveloper", developerController.createdeveloper  )

router.post("/createbatch", batchController.createbatch  )

router.get("/getalldev",developerController.fetchsalldev)

router.get("/getalldevanprogram",developerController.developers)




//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;