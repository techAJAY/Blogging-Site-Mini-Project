const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
 
 try{ //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(200).send({ msg: savedData });
 }
 catch(err){
   console.log("error",err.message)
res.status(400).send({error:err.message})
 }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
 
    return res.status(300).send({
      status: false,
      msg: "username or the password is not correct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"
  );
  //res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
  

};

const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(201).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
}
catch(err){
  console.log("error",err.message)
  res.status(402).send({error:err.message})
}
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(err){
  console.log("error")
  res.status(300).send({error:err.message})
}
};

// const deleteUser = async function(req, res) {    
//   let userId = req.params.userId
//   let user = await userModel.findById(userId)
//   if(!user) {
//       return res.send({status: false, message: "no such user exists"})
//   }
//   let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
//   res.send({status: true, data: updatedUser})
// }

const postMessage = async function (req, res) {
try{
  let message = req.body.message
  
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  let decodedToken = jwt.verify(token, 'functionup-uranium')

  if(!decodedToken) return res.status(201).send({status: false, msg:"token is not valid"})
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.status(402).send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.message
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{message: updatedPosts}, {new: true})

  //return the updated user document
  return res.status(201).send({status: true, data: updatedUser})
}
catch(err){
  console.log("error",err.message)
  res.status(404).send({error:err.message})
}
  
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
// module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage