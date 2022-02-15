const mongoose = require('mongoose');
const Products = require('../../models/product');

module.exports = {
    getAll: (req, res, next) => {

        Products.find().select("name price _id productImage").then((result) => {

            res.status(200).json(result);

        });
    },
    postProduct: (req, res, next) => {

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
    },
    getByName: (req, res, next) => {

        Products.findOne({
            name: req.params.name
        }).select("name price _id productImage").then((result) => {
            res.status(200).json(result);
        });
    },
    deleteProduct: (req, res, next) => {

        Products.remove({
            name: req.params.name
        }).then((result) => {
            res.status(200).json(result);
        });
    },
    patchProduct: (req, res, next) => {

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

    }
}