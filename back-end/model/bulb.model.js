// const mongoose = require("mongoose");

// const bulbSchema = mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     price: { type: Number, required: true },
//     desc: { type: String, required: true },
//     desc_2: { type: String, required: true },
//     Wattage: { type: String, required: true },
//     Brand: { type: String, required: true },
//     Lighting_Color: { type: String, required: true },
//     application: { type: String, required: true },
//     desc_3: { type: String, required: true },
//     desc_4: { type: String, required: true },
//     desc_5: { type: String, required: true },
//     desc_6: { type: String, required: true },
//     desc_7: { type: String, required: true },
//     desc_8: { type: String, required: true },
//     supplier: { type: String, required: true },
//     supplier_Addres: { type: String, required: true },
//     cl: { type: String, required: true },
//     mob: { type: String, required: true },
//     contact: { type: String, required: true },
//     img1: { type: String, required: true },
//     img2: { type: String },
//     userID: { type: String },
//   },
//   {
//     versionKey: false,
//   }
// );

// const BulbModel = mongoose.model("bulb", bulbSchema);

// module.exports = BulbModel;

const mongoose = require("mongoose");

const bulbSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String },
    Wattage: { type: String, required: true },
    Brand: { type: String, required: true },
    Lighting_Color: { type: String },
    application: { type: String },
    supplier: { type: String, required: true },
    supplier_Addres: { type: String, required: true },
    cl: { type: String },
    contact: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String },
    userID: { type: String },
  },
  {
    versionKey: false,
  }
);

const BulbModel = mongoose.model("bulb", bulbSchema);

module.exports = BulbModel;
