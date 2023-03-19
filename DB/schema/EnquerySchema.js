const mongoose = require('mongoose');
const { Schema } = mongoose;

const enqueryschema = new Schema({
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message:{
    type:String,
    required: true
  }
});

module.exports = enqueryschema;
