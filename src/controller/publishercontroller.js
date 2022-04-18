const PublisherModel= require("../models/publisherModels")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let PublisherCreated = await PublisherModel.create(publisher)
    res.send({data:PublisherCreated })
}

//const getAuthorsData= async function (req, res) {
  //  let authors = await AuthorModel.find()
  //  res.send({data: authors})


module.exports.createPublisher= createPublisher
//module.exports.getAuthorsData= getAuthorsData