const mongoose = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

const User = require('../models/user');

route.post('/signup', (req, res, next) => {




    User.findOne({ email: req.body.email }).then((result) => {
        if (result !== null) {
            res.status(209).json({
                message: "Email Already exits"
            })
        } else {
            // bcrypt.hash(res.body.password,10,(err, hash)=>{

            // })
            // const user = new User({
            //     _id: new mongoose.Types.ObjectId(),
            //     email: req.body.email,
            //     passwors:
            // })
        }
    })

});

module.exports = route