const mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: false },
    Machine_Type: { type: String, required: false },
    desc_2: { type: String, required: false },
    desc_3: { type: String, required: false },
    Machine_Gauges: { type: String, required: false },
    desc_4: { type: String, required: false },
    desc_5: { type: String, required: false },
    desc_6: { type: String, required: false },
    desc_7: { type: String, required: false },
    Brand: { type: String, required: false },
    desc_8: { type: String, required: false },
    desc_9: { type: String, required: false },
    desc_10: { type: String, required: false },
    desc_11: { type: String, required: false },
    desc_12: { type: String, required: false },
    supplier: { type: String, required: false },
    supplier_Addres: { type: String, required: false },
    cl: { type: String, required: false },
    mob: { type: Number, required: false },
    contact: { type: String, required: false },
    img1: { type: String, required: false },
    img2: { type: String },
    userID: String,
  },
  {
    versionKey: false,
  }
);

const MachineModel = mongoose.model("machin", machineSchema);

module.exports = MachineModel;
