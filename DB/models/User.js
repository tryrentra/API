const mongoose = require('mongoose');
const userSchema = require("../schema/UserSchema");
// Defining the Schema fro User
const User = mongoose.model("User",userSchema)

module.exports = User