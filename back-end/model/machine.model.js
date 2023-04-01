const mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    Machine_Type: { type: String, required: true },
    desc_2: { type: String },
    desc_3: { type: String },
    Machine_Gauges: { type: String, required: true },
    supplier: { type: String, required: true },
    supplier_Addres: { type: String, required: true },
    cl: { type: String },
    mob: { type: String },
    contact: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String },
    userID: String,
  },
  {
    versionKey: false,
  }
);

const MachineModel = mongoose.model("machin", machineSchema);

module.exports = MachineModel;
