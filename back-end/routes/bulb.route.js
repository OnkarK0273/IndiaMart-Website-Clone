const express = require("express");
const { BulbModel } = require("../model/bulb.model");
const bulbRouter = express.Router();
var jwt = require("jsonwebtoken");

// Read
bulbRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  // console.log(token);
  const decoded = jwt.verify(token, "shhhhh");

  try {
    if (decoded) {
      const bulbs = await BulbModel.find({ userID: decoded.userID });
      res.status(200).send(bulbs);
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// sample
bulbRouter.get("/sample", async (req, res) => {
  res.send("for checking commit problem");
});

// Create
bulbRouter.post("/add", async (req, res) => {
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
bulbRouter.patch("/update/:bulbID", async (req, res) => {
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
bulbRouter.delete("/delete/:bulbID", async (req, res) => {
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
