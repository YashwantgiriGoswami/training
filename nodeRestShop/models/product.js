const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    quantity: Number
});

module.exports = mongoose.model('products', productSchema);