const express = require('express');
const controller = require('../controller/controller');
const bodyParser = require('body-parser');

const urlencodedparser = bodyParser.urlencoded({ extended: false });

const route = express.Router();

route.get('/', controller.home);
route.post('/signUp', urlencodedparser, controller.signUp);
route.post('/login', urlencodedparser, controller.login);

module.exports = route;
