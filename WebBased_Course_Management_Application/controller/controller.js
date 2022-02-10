const courses = require('../models/courses');

const message = require('../config/config');

module.exports = {

    home: function(req, res) {
        courses.findAll().then((order) => {
            res.render('home', { data: order, message: message.message });
        });
    },

    getAddCourse: function(req, res) {
        res.render('addCourse', { message: message.message });
    },

    postAddCourse: function(req, res) {

        let { name, duration, fees } = req.body;

        courses.create({ name, duration, fees }).then(() => {
            res.redirect("/");
        });
    },

    getEditCourse: function(req, res) {

        courses.findByPk(req.params.id).then((order) => {

            res.render('editCourse', { data: order, id: req.params.id, message: message.message });

        });
    },

    postEditCourse: function(req, res) {

        let { id, name, duration, fees } = req.body;

        courses.update({
            name: name,
            duration: duration,
            fees: fees
        }, { where: { id: id } }).then(() => {
            res.redirect("/");
        });
    },

    getDelete: function(req, res) {
        courses.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect("/");
        });
    }
}