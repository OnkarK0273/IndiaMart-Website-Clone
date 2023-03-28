const mongoose = require("mongoose");

const bulbSchema = mongoose.Schema(
  {},
  {
    versionKey: false,
  }
);

const BulbModal = mongoose.model("user", bulbSchema);

module.exports = BulbModal;
