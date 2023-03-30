const express = require("express");
const BulbModel = require("../model/bulb.model");
const bulbRouter = express.Router();
var jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../middleware/auth.middleware");

// Read
bulbRouter.get("/", async (req, res) => {
  const {token} = req.headers;
  // console.log(token);
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  try {
    if (decoded) {
      const bulbs = await BulbModel.find({ userID: decoded.userID });
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

// // get

// bulbRouter.get("/", async (req, res) => {
//   try {
//     const bulb = await BulbModel.find();
//     res.status(200).send({ data: bulb });
//   } catch (err) {
//     res.status(200).send({ error: err.message });
//   }
// });

// // post

// bulbRouter.post("/add", auth, async (req, res) => {
//   try {
//     const bulb = new BulbModel(req.body);
//     const result = await bulb.save();
//     res.status(200).send({ data: result });
//   } catch (err) {
//     res.status(400).send({ err: err.message });
//   }
// });

// // patch /update

// bulbRouter.patch("/update/:id", auth, async (req, res) => {
//   const { id } = req.params;
//   try {
//     await BulbModel.findByIdAndUpdate({ _id: id }, req.body);
//     res.status(200).send({ msg: "bulb updated successfully..." });
//   } catch (err) {
//     res.status(400).send({ error: err.message });
//   }
// });

// // delete

// bulbRouter.delete("/delete/:id", auth, async (req, res) => {
//   const { id } = req.params;
//   try {
//     await BulbModel.findByIdAndDelete({ _id: id });
//     res.status(200).send({ msg: "bulb deleted successfully..." });
//   } catch (err) {
//     res.status(400).send({ error: err.message });
//   }
// });

module.exports = { bulbRouter };
