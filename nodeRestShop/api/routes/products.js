const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const Products = require('/home/ztlab/Documents/Assignments/nodeRestShop/models/product');

route.get('/', (req, res, next) => {

    Products.find().then((result) => {

        res.status(200).json(result);

    });
});

route.post('/', (req, res, next) => {

    var { name, quantity } = req.body;

    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        quantity: quantity
    });

    product.save().then((result) => {
        console.log(result);
    });

    res.status(200).json({
        message: `in post request product`,
        name: name,
        quantity: quantity

    });
});

route.get('/:name', (req, res, next) => {

    Products.find({ name: req.params.name }).then((result) => {
        res.status(200).json(result);
    });
});

route.delete('/:name', (req, res, next) => {

    Products.remove({ name: req.params.name }).then((result) => {
        res.status(200).json(result);
    });
});

route.patch('/', (req, res, next) => {

    res.status(201).json({
        message: `in patch request product`
    });
});

module.exports = route;