const express = require("express");
const MachineModel = require("../model/machine.model");
const machineRouter = express.Router();
var jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../middleware/auth.middleware");

// Read
machineRouter.get("/",auth, async (req, res) => {
  const { token } = req.headers;
  // console.log(token);

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  // console.log("decoded", decoded);

  try {
    if (decoded.role==="user") {
      const machines = await MachineModel.find({ userID: decoded.userID });
      // const machines = await MachineModel.find();
      // console.log(machines[0].userID);

      res.status(200).send({data:machines});
    }else{
      const machines = await MachineModel.find();
       res.status(200).send({data:machines});

    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Create
machineRouter.post("/add", auth, async (req, res) => {
  try {
    const payload = req.body;
    // console.log(payload);
    const new_machine = new MachineModel(payload);
    await new_machine.save();
    res.status(200).send({ msg: "A new machine has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Update
machineRouter.patch("/update/:machineID", auth, async (req, res) => {
  const { machineID } = req.params;
  const data = req.body;
  // console.log(machineID,payload)
  try {
    await MachineModel.findByIdAndUpdate({ _id: machineID }, data);
    res.status(200).send({ msg: "machine details has been updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Delete
machineRouter.delete("/delete/:machineID", auth, async (req, res) => {
  const { machineID } = req.params;
  // console.log(machineID);
  try {
    await MachineModel.findByIdAndDelete({ _id: machineID });
    res.status(200).send({ msg: "machine has been deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { machineRouter };
