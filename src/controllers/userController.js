const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
 // try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
 // }
  // catch(err){
  //   console.log("error:",err.message);
  //   res.status(204).send({msg:"error::",error:err.message})
  // }
};


const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send({status: false, msg: "username or the password is not correct",});
   let token = jwt.sign(
    {
      userId: user._id.toString(), batch: "uranium",organisation: "FUnctionUp", },"functionup-uranium");
  //res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
    
    // catch(err){
    //   console.log("error:",err.message);
    //   res.status(400).send({msg:"error::",error:err.message})
    // }
    
};


 
const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.status(100).send({ status: true, data: userDetails });
}
catch(err){
  if (!userDetails)
  console.log("error")
    return res.status(404).send({ status: false, msg: "No such user exists" });
}
 
};


const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function(req, res) {    
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.send({status: true, data: updatedUser})
}


const postMessage = async function (req, res) {
  let message = req.body.message
  
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  let decodedToken = jwt.verify(token, 'functionup-uranium')

  if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.message
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{message: updatedPosts}, {new: true})

  //return the updated user document
  return res.send({status: true, data: updatedUser})
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage