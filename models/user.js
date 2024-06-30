const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  city: String,
});

const User = model("User", userSchema);
module.exports = User;
