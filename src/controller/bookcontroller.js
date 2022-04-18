
const bookModel = require("../models/bookmodels")

const createbook= async function(req,res){
    let data = req.body
     //console.log(data)
    let savedata  = await bookModel.create(data)
    res.send({msg:savedata})
   

}


  //let alluserdata = await bookModel.find( {
  // $or: [{authorname:"pk"}, {ispublished: true }]
  // }).select({bookname:1,authorname:1, _id:0}).count()
  
  //let alluserdata = await bookModel.find().sort( { sales:-1})
  // let alluserdata = await bookModel.find().sort( { sales:-1}).limit(3).select({bookname:1,authorname:1, _id:0})
  //let page = req.query.page
  //PAGINATION:let alluserdata = await bookModel.find().skip(2 * (page-1)).limit(2)
   
    // let alluserdata = await bookModel.find({sales:{$eq:20}})
     //let alluserdata = await bookModel.find({sales:{$gt:20}})
     //let alluserdata = await bookModel.find({sales:{$lt:20}})
     //let alluserdata = await bookModel.find({sales:{$lte:20}})
    // let alluserdata = await bookModel.find({sales:{$gte:20}})
    // let alluserdata = await bookModel.find({sales:{$ne:20}})
    //let alluserdata = await bookModel.find({ $or:  [{sales: {$eq:12} },{sales: {$eq:20} }  ]    })
    //let alluserdata = await bookModel.find({  sales:  { $in:[20,12] }   }).select({ bookname:1,authorname:1, _id:0})
    //let alluserdata = await bookModel.find({  sales:  { $nin:[20,12] }   }).select({ bookname:1,sales:1, _id:0})
    //let alluserdata = await bookModel.find({ sales:{$gt:11} , sales:{$lt:28}})

    //FindById and findone:
    //let alluserdata = await bookModel.findById("62593d0e980be2ff9a056ec3")
   // let alluserdata  = await bookModel.findOne({sales:27})


   //update and updateone:
   //let alluserdata  = await bookModel.update(  {sales:20} ,  {$set: {authorname:"Ap"}}  )


   //REGEX:
   //to search by starting name: let alluserdata  = await bookModel.find(  {bookname: /^int/}  )
   //"i" neglate case sensitive: let alluserdata  = await bookModel.find(  {bookname: /^INT/i}  )
   //to search bylast name:     let alluserdata  = await bookModel.find(  {bookname: /2$/}  )
//to search randomly   :     let alluserdata  = await bookModel.find(  {bookname: /.*monk.*/}  )
   const getbookdata  = async function(req,res)  {
   
    let a =4+5
    a = a+11
    console.log(a) 

  let alluserdata  = await bookModel.find()

   console.log(alluserdata)
   let b = 8+3
   b = b+20
   console.log(b)
   res.send({ msg:alluserdata})

}

module.exports.createbook = createbook
module.exports.getbookdata = getbookdata