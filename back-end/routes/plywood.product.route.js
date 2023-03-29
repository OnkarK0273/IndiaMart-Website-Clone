const express = require("express");
const PlywoodProductModel = require("../model/plywood.product.model");
require('dotenv').config()
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth.middleware");
const plywoodRoute = express.Router()

plywoodRoute.get("/",async(req,res)=>{

    try {
        
        const plywoodProducts = await PlywoodProductModel.find()

        res.status(200).send({'data':plywoodProducts})
        
    } catch (err) {
        res.status(200).send({error:err.message})
        
    }

})

// get particular users products
plywoodRoute.get("/myproducts",async(req,res)=>{
           const {userID} = req.body

    try {    
            const plywoodProducts = await PlywoodProductModel.find({userID})
   
            res.status(200).send({'data':plywoodProducts})
          
    } catch (err) {
        res.status(200).send({error:err.message})       
    }
})

// post 

plywoodRoute.post("/add",auth,async(req,res)=>{
   
    try {
           const product = new PlywoodProductModel(req.body)

           const result = await product.save()

           res.status(200).send({data: result})
    } catch (err) {
        res.status(400).send({err:err.message})
    }
})

// patch /update


plywoodRoute.patch('/update/:id',auth,async(req,res)=>{

    const {id} = req.params
    try {
        
        await PlywoodProductModel.findByIdAndUpdate({_id:id},req.body)

        res.status(200).send({"msg":"product updated successfully..."})
    } catch (err) {
        res.status(400).send({error:err.message})
    }
})

plywoodRoute.delete('/delete/:id',auth,async(req,res)=>{

    const {id} = req.params
    try {
        
        await PlywoodProductModel.findByIdAndDelete({_id:id})

        res.status(200).send({"msg":"product deleted successfully..."})
    } catch (err) {
        res.status(400).send({error:err.message})
    }
})



module.exports=plywoodRoute