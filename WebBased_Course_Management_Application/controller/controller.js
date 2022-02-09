const body_parser = require('body-parser');

const Sequelize = require('sequelize');

var alert = require('alert');


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
        alert("Added Successfully");
        res.redirect("/");

    });

    app.get('/editCourse/:id', function(req, res) {

        courses.findByPk(req.params.id).then((order) => {

            res.render('editCourse', { data: order, row_id: req.params.id });

        });
    });

    app.post('/editCourse', urlencodedparser, function(req, res) {

        courses.update({

            name: req.body.course_name,
            duration: req.body.course_duration,
            fees: req.body.course_fees

        }, { where: { id: req.body.row_id } });

        alert("Updated Successfully");
        res.redirect("/");

    });

    app.get('/deleteCourse/:id', function(req, res) {

        courses.destroy({
            where: {
                id: req.params.id
            }
        });

        alert("Deleted Successfully");
        res.redirect("/");
    });

}