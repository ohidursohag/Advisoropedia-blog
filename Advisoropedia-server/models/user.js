const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  profileImage: String,
  password: String,
  userRole: String,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
