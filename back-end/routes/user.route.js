const express = require("express");
const UserModal = require("../modal/user.modal");

const userRoute = express.Router()

userRoute.get('/users',async(req,res)=>{

    try{
      const users = await UserModal.find()
      res.status(201).json({"users":users})

    }catch(err){
      res.status(401).json({"msg":"something went wrong"})
    }


})

module.exports = userRoute;