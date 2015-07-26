var express = require('express'),
    app = express(),
    busboy = require('connect-busboy'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(methodOverride());

require('./app/routes.js')(app);

app.use(busboy());




app.listen(port);

console.log('Listening on port ' + port);
