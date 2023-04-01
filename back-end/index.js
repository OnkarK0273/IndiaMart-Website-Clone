const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const plywoodRoute = require("./routes/plywood.product.route");
const adminRoute = require("./routes/admin.route");
require("dotenv").config();
const app = express();
const { bulbRouter } = require("./routes/bulb.routes");
const { machineRouter } = require("./routes/machine.routes");

// global middleweres---------------

app.use(express.json());
app.use(cors());

//  routes--------------------------

// route-1
app.use("/users", userRoute);

// route-
app.use("/admin", adminRoute);

//route-2
app.use("/plywood", plywoodRoute);

//route-3
app.use("/bulbs", bulbRouter);

//route-4
app.use("/machines", machineRouter);

// run http and back-end server-------------------

app.listen(process.env.HTTP_PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("connected db");
  } catch (err) {
    console.log("not-connected");
    console.log(err);
  }
  console.log("port 4500 running");
});
