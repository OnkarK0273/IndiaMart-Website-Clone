const express = require("express");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userRoute = express.Router();

// userRoute.get('/', async (req, res) => {

//   try {
//     const users = await UserModel.find()
//     res.status(201).json({ "users": users })

//   } catch (err) {
//     res.status(401).json({ "msg": "something went wrong" })
//   }

// })

userRoute.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const users = await UserModel.find({ email });

    if (users.length > 0) {
      return res.status(400).send({ error: "user already exists" });
    }
    const hashPass = await bcrypt.hash(password, 5);
    //  console.log(hashPass)
    const user = new UserModel({ ...req.body, password: hashPass });

    const result = await user.save();

    res.status(200).send({ data: result });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).send({ error: "user does not exists" });
    } else {
      const decoded = await bcrypt.compare(password, user.password);
      if (decoded) {
        let token = jwt.sign(
          { userID: user._id, role: user.role },
          process.env.SECRET_KEY
          // { expiresIn: "24hr" }
        );
        // console.log(token)
        res.status(200).send({ token, user });
      } else {
        res.status(400).send({ err: "please check password or email!" });
      }
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = userRoute;
