const mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: true },
    Machine_Type: { type: String, required: true },
    desc_2: { type: String, required: true },
    desc_3: { type: String, required: true },
    Machine_Gauges: { type: String, required: true },
    desc_4: { type: String, required: true },
    desc_5: { type: String, required: true },
    desc_6: { type: String, required: true },
    desc_7: { type: String, required: true },
    Brand: { type: String, required: true },
    desc_8: { type: String, required: true },
    desc_9: { type: String, required: true },
    desc_10: { type: String, required: true },
    desc_11: { type: String, required: true },
    desc_12: { type: String, required: true },
    supplier: { type: String, required: true },
    supplier_Addres: { type: String, required: true },
    cl: { type: String, required: true },
    mob: { type: Number, required: true },
    contact: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String },
    userID: { type: String },
  },
  {
    versionKey: false,
  }
);

const MachineModel = mongoose.model("machin", machineSchema);

module.exports = MachineModel;
