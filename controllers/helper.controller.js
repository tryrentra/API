const express = require('express');
const Enquery = require("../DB/models/Enquery")

const enquery = async (req, res) => {
    const {email,subject,message} = req.body
    const doc = new Enquery({
        email,
        subject,
        message
    });
    await doc.save().then(()=>{
        res.send({
            response:`'${subject}' has been created`
        })
    }) 
}


module.exports = {enquery}