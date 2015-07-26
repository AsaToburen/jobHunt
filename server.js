var express = require('express'),
    app = express(),
    fs = require('fs'),
    busboy = require('connect-busboy'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({
//    'extended': 'true'
//}));
//app.use(bodyParser.json());
//app.use(bodyParser.json({
//    type: 'application/vnd.api+json'
//}));
app.use(methodOverride());
//
require('./app/routes.js')(app);

app.use(busboy());
//...



app.listen(port);

console.log('Listening on port ' + port);
