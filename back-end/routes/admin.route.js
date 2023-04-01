// get
// delete
// add
// update

const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const admin_auth = require("../middleware/admin_auth.middleware");
const UserModel = require("../model/user.model");
const super_admin_auth = require("../middleware/superAdmin.middle");
const adminRoute = express.Router();

adminRoute.get("/usersdata", admin_auth, async (req, res) => {
  try {
    const users = await UserModel.find({ role: "user" });
    res.status(201).json({ users: users });
  } catch (err) {
    res.status(401).json({ error: "something went wrong" });
  }
});

adminRoute.get("/admindata", admin_auth, async (req, res) => {
  try {
    const users = await UserModel.find({ role: "admin" });
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(401).json({ error: "something went wrong" });
  }
});

adminRoute.post("/addadmin", super_admin_auth, async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminData = await UserModel.find({ email });
    // console.log(adminData)
    if (!adminData.length > 0) {
      const hashPass = await bcrypt.hash(password, 5);
      const admin = new UserModel({ ...req.body, password: hashPass });

      const result = await admin.save();
      res.status(200).send({ data: result });
    } else {
      res.status(400).send({ error: "admin already exists." });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

adminRoute.patch("/updateAdmin/:id", super_admin_auth, async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).send({ msg: "admin updated successfully..." });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

adminRoute.delete("/deleteAdmin/:id", super_admin_auth, async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndDelete({ _id: id });

    res.status(200).send({ msg: "admin deleted successfully..." });
  } catch (err) {}
});
module.exports = adminRoute;
