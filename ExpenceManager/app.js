const express = require('express');
const route = require('./rotues/routes');

const app = express();

app.set('view engine', 'ejs');

app.use('/', route);

app.listen(3000);
