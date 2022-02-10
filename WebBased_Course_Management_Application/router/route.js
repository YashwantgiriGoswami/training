const body_parser = require('body-parser');

var express = require('express');

const route = express.Router();

const controller = require('../controller/controller');

const urlencodedparser = body_parser.urlencoded({ extended: false });

route.get('/', controller.home);
route.get('/addCourse', controller.getAddCourse);
route.post('/addCourse', urlencodedparser, controller.postAddCourse);
route.get('/editCourse/:id', controller.getEditCourse);
route.post('/editCourse', urlencodedparser, controller.postEditCourse);
route.get('/deleteCourse/:id', controller.getDelete);

module.exports = route;