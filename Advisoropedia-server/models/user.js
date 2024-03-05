const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: { type: String, unique: true, require: true },
    profileImage: String,
    password: {
      type: String,
      default: "",
    },
    userRole: String,
    verified_email: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
