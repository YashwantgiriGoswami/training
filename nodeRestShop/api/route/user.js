const express = require('express');
const route = express.Router();
const userController = require('../controller/user')

route.post('/signup', userController.signup);

route.post("/login", userController.login);

module.exports = route