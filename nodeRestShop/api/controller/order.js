const mongoose = require('mongoose');
const Order = require('../../models/order');

module.exports = {
    getAll: (req, res, next) => {

        Order.find().select("_id productId quantity").populate('productId').then((result) => {

            res.status(200).json(result);
        });
    },
    postOrder: (req, res, next) => {

        var { productId, quantity } = req.body;

        var order = new Order({
            _id: new mongoose.Types.ObjectId(),
            productId: productId,
            quantity: quantity
        });

        order.save().then((result) => {
            res.status(200).json(result);
        });
    },
    getById: (req, res, next) => {

        Order.findOne({ _id: req.params.id }).select("_id productId quantity").populate('productId').then((result) => {
            res.status(200).json(result);
        });
    },
    deleteOrder: (req, res, next) => {

        Order.remove({ _id: req.params.id }).then((result) => {
            res.status(200).json(result);
        });
    },
    patchOrder: (req, res, next) => {

        Order.updateOne({ _id: req.params.id }, { quantity: req.body.quantity }).then((result) => {
            res.status(200).json(result);
        });
    }
}