const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({ extended: false });

route.get('/', (req, res, next) => {

    res.status(200).json({
        message: `in get request order`
    });
});

route.post('/', (req, res, next) => {

    var { name, id } = req.body;

    res.status(200).json({
        message: `in post request order`,
        name: `${name}`,
        id: `${id}`
    });
});

route.get('/:id', (req, res, next) => {

    res.status(200).json({
        message: `in get request order ${req.params.id}`
    });
});

route.delete('/', (req, res, next) => {

    res.status(201).json({
        message: `in delete request order`
    });
});

route.patch('/', (req, res, next) => {

    res.status(201).json({
        message: `in patch request order`
    });
});

module.exports = route;