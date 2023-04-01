const express = require("express");
const PlywoodProductModel = require("../model/plywood.product.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.middleware");

const plywoodRoute = express.Router()


plywoodRoute.get("/", async (req, res) => {
  const {wood_type,Color,order,sortBy,brand,page,limit,supplier} = req.query
const query ={}

  if(wood_type){
    query.wood_type= new RegExp(wood_type, 'i');
  }
  if(Color){
    query.Color=new RegExp(Color, 'i')
  }
  if(brand){
    query.brand=new RegExp(brand, 'i')
  }
  if(supplier){
    query.supplier=new RegExp(supplier, 'i')
  }
  //  console.log(query)
   
   const sort = {};
   if (sortBy) sort[sortBy] = order;
   const options = {
     sort,
     limit: parseInt(limit) || 10,
     skip: (parseInt(page) - 1) * parseInt(limit) || 0,
   }

  //  console.log(sort)

  try {
    const plywoodProducts = await PlywoodProductModel.find(query,null,options);

    res.status(200).send({ data: plywoodProducts });
  } catch (err) {
    res.status(200).send({ error: err.message });
  }
});
plywoodRoute.get("/:id",async(req,res)=>{
    const {id} = req.params
// console.log(id)
    try {
        
      if(order){

        const plywoodProducts = await PlywoodProductModel.findOne({_id:id})

        res.status(200).send({'data':plywoodProducts})
        
      }else{

        const plywoodProducts = await PlywoodProductModel.findOne({_id:id})

        res.status(200).send({'data':plywoodProducts})
        
      }
    } catch (err) {
        res.status(200).send({error:err.message})
        
    }

})


// post

plywoodRoute.get("/:id",async(req,res)=>{
    const {id} = req.params
// console.log(id)
    try {
        
        const plywoodProducts = await PlywoodProductModel.findOne({_id:id})

        res.status(200).send({'data':plywoodProducts})
        
    } catch (err) {
        res.status(200).send({error:err.message})
        
    }

})

plywoodRoute.post("/add", auth, async (req, res) => {
  try {
    const product = new PlywoodProductModel(req.body);

    const result = await product.save();

    res.status(200).send({ data: result });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

// patch /update

plywoodRoute.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    await PlywoodProductModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).send({ msg: "product updated successfully..." });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

plywoodRoute.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    await PlywoodProductModel.findByIdAndDelete({ _id: id });

    res.status(200).send({ msg: "product deleted successfully..." });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = plywoodRoute;
