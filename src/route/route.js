const express = require('express');
const router = express.Router();

const authorController= require("../controller/authorcontroller")
const bookController= require("../controller/bookcontroller")
const publisherController =require("../controller/publishercontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher",publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/get-all-books",bookController.fetchbooks)

router.put("/book",bookController.updateBooks)



//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;