var express = require('express');

var app = express();

var controllers = require('./controller/controller')

app.set('view engine', 'ejs');

app.use(express.static('public'));

controllers(app);

app.listen(3000);