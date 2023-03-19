const express = require('express');
const User = require("../DB/models/User")
const jwt = require('jsonwebtoken');

const signup =  async (req, res) => {
    const waNum = req.body.waNum;
    const waName = req.body.waName;
    const doc = new User({
        name:waName,
        phone:waNum
    });
    await doc.save().then(()=>{
    const token = jwt.sign({
        name:waName,
        phone:waNum
    }, 'iloverentraverymuch', { expiresIn: '30d' });
    res.cookie('rentra_landed', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000  });
        res.send({
            response:`${waName}'s Account has been Created`
        })
    }) 
}


module.exports = {signup}