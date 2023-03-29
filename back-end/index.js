const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/user.route");
const { bulbRouter } = require("./routes/bulb.route");
// global middleweres---------------

app.use(express.json());
app.use(cors());

//  routes--------------------------

// route-1
app.use("/auth", userRoute);

// route-2
app.use("/bulbs", bulbRouter);

// run http and back-end server-------------------

app.listen(process.env.HTTP_PORT, async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_CONNECT}`);
    console.log("connected to db");
  } catch (err) {
    console.log("not-connected");
    console.log(err);
  }
  console.log("port 4500 running");
});
