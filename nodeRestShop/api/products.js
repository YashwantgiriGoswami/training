const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const Products = require('../models/product');

route.get('/', (req, res, next) => {

    Products.find().select("name price _id").then((result) => {

        res.status(200).json(result);

    });
});

route.post('/', (req, res, next) => {

    var {
        name,
        price
    } = req.body;

    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        price: price
    });

    product.save().then((result) => {
        console.log(result);
    });

    res.status(200).json({
        message: `in post request product`,
        name: name,
        price: price

    });
});

route.get('/:name', (req, res, next) => {

    Products.findOne({
        name: req.params.name
    }).select("name price _id").then((result) => {
        res.status(200).json(result);
    });
});

route.delete('/:name', (req, res, next) => {

    Products.remove({
        name: req.params.name
    }).then((result) => {
        res.status(200).json(result);
    });
});

route.patch('/:name', (req, res, next) => {

    Products.updateOne({
        name: req.params.name
    }, {
        $set: {
            name: req.body.name,
            price: req.body.price
        }
    }).then((result) => {
        res.status(200).json(result);
        console.log(result);
    })

});

module.exports = route;