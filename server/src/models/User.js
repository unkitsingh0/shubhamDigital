const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  AccounCrationTime: { type: String, default: Date.now() },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
