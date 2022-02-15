const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const product = require('./api/route/products');
const order = require('./api/route/order');
const bodyParser = require('body-parser');
const multer = require('multer');
const user = require('./api/route/user');

const app = express();

mongoose.connect('mongodb+srv://yashwant:yashwant@yashwant.us1kn.mongodb.net/Product?retryWrites=true&w=majority');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use((req, res, next) => {

//     res.header('Access-Control-Allow-Origin', "*");

//     res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if (req.method === 'OPTIONS') {

//         res.header('Access-Control-Allow-Method', 'PUT,POST,DELETE,PATCH,GET');
//         return res.status(200).json({});
//     }
//     next();

// });

app.use('/product', product);
app.use('/order', order);
app.use('/user', user);

app.use((req, res, next) => {

    const error = new Error('Page not found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.status || 500);

    res.json({
        error: {
            message: error.message
        }
    })


});

module.exports = app;