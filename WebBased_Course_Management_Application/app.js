var express = require('express');

// const database = require('./models/database');

var app = express();

var controllers = require('./controller/controller');

app.set('view engine', 'ejs');

app.use(express.static('public'));


// database.sequelize.sync({ force: true }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })


controllers(app);

app.listen(3000);