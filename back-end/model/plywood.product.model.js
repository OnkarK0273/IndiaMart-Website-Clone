const mongoose = require("mongoose");

const plywoodProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quan: { type: String, required: false },
    size: { type: String, required: false },
    Color: { type: String, required: false },
    Wood_Type: { type: String },
    UsageApplication: { type: String },
    Thickness: { type: Number },
    Brand: { type: String, required: false },
    supplier: { type: String, required: false },
    supplier_Addres: { type: String, required: false },
    mob: { type: Number },
    contact: { type: String, required: false },
    userID: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
  },
  {
    versionKey: false,
  }
);

const PlywoodProductModel = mongoose.model("plywood", plywoodProductSchema);

module.exports = PlywoodProductModel;

/**
 * 
"title":"Plyneer Silver BWR Plywood, Thickness: 18 mm, Size: 8' x 4'"
"price":70
"quan":"Square Feet"
"size":"  8' x 4'"
"Color": " Brown"
"Wood Type":"  Hardwood"
"UsageApplication":"  Furniture"
"Thickness":"  18 mm"
"Brand":"  Plyneer Silver"
"supplier":"Plyneer Industries"
"supplier_Addres":"Bengaluru"
"mob":8048965506
"contact":"Contact Supplier"
"img1":"https:5.imimg.comdata5SELLERDefault20226AECENV2930571plyneer-silver-bw…"
"img2":"https:5.imimg.comdata5SELLERDefault202210USDJJX2930571oem-moduler-furn…"
"img3":"https:5.imimg.comdata5SELLERDefault202210CZFEBR2930571plyneer-gold-cal…"
"img4":"https:5.imimg.comdata5FGFFMY-2930571densified-plywood-500x500.jpg"

 */
