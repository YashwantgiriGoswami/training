const express = require('express');
const route = express.Router();
const checkAuth = require('../middleware/check-auth');
const orderController = require('../controller/order');

route.get('/', checkAuth, orderController.getAll);

route.post('/', checkAuth, orderController.postOrder);

route.get('/:id', checkAuth, orderController.getById);

route.delete('/:id', checkAuth, orderController.deleteOrder);

route.patch('/:id', checkAuth, orderController.patchOrder);

module.exports = route;