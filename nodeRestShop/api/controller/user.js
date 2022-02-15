const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
    signup: (req, res, next) => {
        User.find({ email: req.body.email }).then((result) => {
            if (result.length >= 1) {
                res.status(209).json({
                    message: "Email Already exits"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(409).json({
                            message: "error"
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save().then((result) => {
                            console.log(result);
                        }).then(() => {
                            res.status(200).json({
                                msg: "Success"
                            })
                        })
                    }
                });
            }
        })
    },

    login: (req, res, next) => {
        User.findOne({ email: req.body.email }).then((result) => {
            if (result === null) {
                res.status(404).json({
                    message: "Email does not exit"
                });
            } else {
                bcrypt.compare(req.body.password, result.password, (err, state) => {
                    if (err) {
                        res.status(404).json({
                            message: err
                        });
                    }
                    if (state) {

                        const token = jwt.sign({
                            email: result.email,
                            userId: result._id
                        }, "yashwant", {
                            expiresIn: "1h"
                        });

                        res.status(200).json({
                            message: "success",
                            token: token
                        });
                    } else {
                        res.status(200).json({
                            message: "Password is wrong"
                        });
                    }
                })
            }
        })
    }
}