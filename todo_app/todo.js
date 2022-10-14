var express = require('express');

var app = express();

var todoController = require('./controllers/todo_controller');

//to set the static engine
app.set('view engine', 'ejs');

// to use the static file
app.use(express.static('public'));

// to call the function in the todo_controller file
todoController(app);

app.listen(4000);
