const authorModel = require("../models/authorModels")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModels")

const createBook= async function (req, res) {

  let book = req.body
  let authorId = book.author
  let publisherId = book.publisher

    let author_id = req.body.author;
    if(!author_id){
      return res.send({msg:"authorid is required"})
    }

    let author = await authorModel.findById( author_id)
    if(!author){
      return res.send({msg:"author  is required"})
    }
    
    let publisher_id = req.body.publisher;
    if(!publisher_id){
      return res.send({msg:" publisher id is required"})
    }
  
    let publisher = await publisherModel.findById(publisher_id  )
    if(!publisher){
      return res.send({msg:" publisher is required"})
    }


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})


  }

  const fetchbooks = async function (req, res) {
      
      let books = await bookModel.find().populate('newAuthor publisher')
      res.send({data: books})
  }
  
  const updateBooks = async function (req, res) {
      // update hardcover to true for few books
      let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
      let arrayOfPublishers = []
      
      for (let i = 0; i < hardCOverPublishers.length; i++) {
          let objId = hardCOverPublishers[i]._id 
          arrayOfPublishers.push(objId)
      }
      
      let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})
  
      res.send({data: books})
  }
  
  module.exports.createBook = createBook
  module.exports.fetchbooks = fetchbooks
  module.exports.updateBooks = updateBooks