const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(expressValidator());

//autoload routes
consign()
    .include('/routes')
    .then('/models')
    .then('controllers')
    .into(app);

//export app
module.exports = app;