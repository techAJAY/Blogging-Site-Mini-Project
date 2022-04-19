const authorModels = require("../models/authorModels")
const authorModel = require("../models/authorModels")
const bookModel= require("../models/bookModel")
const publisherModels = require("../models/publisherModels")

const createBook= async function (req, res) {
      let book = req.body
       let authorId = book.author
       let publisherId = book.publisher

   if(!authorId){
    return res.send({msg:"AuthorID is  required"})
 }

  let author = await authorModels.findById(authorId)
  if(!author){
    return res.send({msg:"It is not a valid author Id"})
  
  }
  if (!publisherId){
    return res.send({msg:"Publisherid is Required"})
  }
  
   let publisher = await publisherModels.findById(publisherId)
   if(!publisher){
    return res.send({msg:"It is not a valid publisher Id"})
  }

   let books = await bookModel.create(book)
   res.send({data: books})
  }
    const fetchbooks = async function(req,res){
   let books = await bookModel.find().populate('author' )
    res.send({data:books})
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