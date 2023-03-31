const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
    mobile: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "super_admin"],
    },
    address: {
      city: { type: String, required: false },
      state: { type: String, required: false },
      country: { type: String, required: false },
      pin: { type: Number, required: false },
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
