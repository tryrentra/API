const express = require('express');
const rentra = express.Router();
// define routes on the API router

// User Related Shits here
const {signup} = require("../controllers/user.controller")
rentra.post('/signup',signup);


// helpers
const {enquery} = require("../controllers/helper.controller")
rentra.post("/enquery",enquery)
module.exports = rentra
