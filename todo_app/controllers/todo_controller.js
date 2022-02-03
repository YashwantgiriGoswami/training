var body_parser = require('body-parser');

var mongoose = require('mongoose');

var userName = "";

var Todo;

mongoose.connect('mongodb+srv://yashwant:yashwant@yashwant.us1kn.mongodb.net/Yashwant?retryWrites=true&w=majority');

var schema = new mongoose.Schema({
    item: String
});

var urlencodedparser = body_parser.urlencoded({ extended: false });

module.exports = function(app) {


    app.get('/', function(req, res) {

        res.render('login');

    });

    app.post('/', urlencodedparser, function(req, res) {

        userName = req.body; //{user:'entered value'}

        Todo = mongoose.model(userName.user, schema);

        Todo.find({}, function(err, data) {

            if (err) throw err;
            res.render('index', { todo_item: data, user: userName });

        });

    });

    app.get('/index', function(req, res) {

        Todo.find({}, function(err, data) {

            if (err) throw err;
            res.render('index', { todo_item: data, user: userName });

        });

    });

    app.post('/index', urlencodedparser, function(req, res) {

        var todoData = Todo(req.body).save(function(err, data) {

            if (err) throw err;

            Todo.find({}, function(err, data) {

                if (err) throw err;
                res.render('index', { todo_item: data, user: userName });

            });
        });
    });

    app.get('/index/:item', function(req, res) {

        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).deleteMany(function(err, data) {

            if (err) throw err;
            Todo.find({}, function(err, data) {

                if (err) throw err;
                res.render('index', { todo_item: data, user: userName });

            });

        });
    });

};