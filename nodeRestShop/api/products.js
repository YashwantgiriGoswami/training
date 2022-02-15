const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const multers = require('multer');

const Products = require('../models/product');

const storage = multers.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },

});

const fileFilter = function(req, file, cb) {

    if (file.mimetypes === 'image/jpeg' || file.mimetypes === 'image/png') {
        cb(null, true); //accept it
    } else {
        cb(null, false); //reject it
    }
};

const upload = multers({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 1024
    // },
    // fileFilter: fileFilter
});

route.get('/', (req, res, next) => {

    Products.find().select("name price _id productImage").then((result) => {

        res.status(200).json(result);

    });
});

route.post('/', upload.single('productImage'), (req, res, next) => {

    var path = 'uploads/' + req.file.filename;

    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: path
    });

    product.save().then((result) => {
        console.log(result);
    });

    res.status(200).json({
        message: `in post request product`,
        name: req.body.name,
        price: req.body.price,
        productImage: path

    });
});

route.get('/:name', (req, res, next) => {

    Products.findOne({
        name: req.params.name
    }).select("name price _id productImage").then((result) => {
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