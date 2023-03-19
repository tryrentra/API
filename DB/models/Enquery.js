const mongoose = require('mongoose');
const enquerySchema = require("../schema/EnquerySchema");
// Defining the Schema fro User
const Enquery = mongoose.model("Enquery",enquerySchema)

module.exports = Enquery