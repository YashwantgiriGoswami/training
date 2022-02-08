const body_parser = require('body-parser');

const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const sequelize = require('../models/database');

const courses = require('../models/courses');

var dataFromDatabase = {};

const urlencodedparser = body_parser.urlencoded({ extended: false });

module.exports = function(app) {

    //accepting the home page
    app.get('/', function(req, res) {

        sequelize.sync().then(() => {

            dataFromDatabase = courses.findAll({
                where: {
                    id: {
                        [Op.not]: null,
                    }
                }
            }).then((order) => {


                res.render('home', { data: order });
            });
        });
    });
    //accepting the home page
    app.get('/addCourse', function(req, res) {
        res.render('addCourse');
    });

    app.post('/addCourse', urlencodedparser, function(req, res) {


        courses.create({ name: req.body.course_name, duration: req.body.course_duration, fees: req.body.course_fees });
        sequelize.sync().then(() => {

            dataFromDatabase = courses.findAll({
                where: {
                    id: {
                        [Op.not]: null,
                    }
                }
            }).then((order) => {

                res.render('home', { data: order });
            });
        });

    });

    app.get('/editCourse', function(req, res) {
        res.render('editCourse');
    });

}