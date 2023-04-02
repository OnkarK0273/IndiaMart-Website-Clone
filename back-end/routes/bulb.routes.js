const express = require("express");
const BulbModel = require("../model/bulb.model");
const bulbRouter = express.Router();
var jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../middleware/auth.middleware");

// Read
bulbRouter.get("/",auth, async (req, res) => {
  const { token } = req.headers;
  // console.log(token);
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  try {
    if (decoded) {
      const bulbs = await BulbModel.find({ userID: decoded.userID });
      // const bulbs = await BulbModel.find();
      res.status(200).send(bulbs);
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Create
bulbRouter.post("/add", auth, async (req, res) => {
  try {
    const payload = req.body;
    // console.log(payload);
    const new_bulb = new BulbModel(payload);
    await new_bulb.save();
    res.status(200).send({ msg: "A new bulb has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Update
bulbRouter.patch("/update/:bulbID", auth, async (req, res) => {
  const { bulbID } = req.params;
  const data = req.body;
  // console.log(bulbID,payload)
  try {
    await BulbModel.findByIdAndUpdate({ _id: bulbID }, data);
    res.status(200).send({ msg: "bulb details has been updated" });
  } catch (error) {
    res.status(400).send({ msg: err.message });
  }
});

// Delete
bulbRouter.delete("/delete/:bulbID", auth, async (req, res) => {
  const { bulbID } = req.params;
  // console.log(bulbID);
  try {
    await BulbModel.findByIdAndDelete({ _id: bulbID });
    res.status(200).send({ msg: "bulb has been deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { bulbRouter };
