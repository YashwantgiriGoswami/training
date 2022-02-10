var express = require('express');
const database = require('./models/database');

var app = express();

const route = require('./router/route');

app.set('view engine', 'ejs');

app.use(express.static('public'));

database.sync().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

app.use('/', route);

app.listen(3000);