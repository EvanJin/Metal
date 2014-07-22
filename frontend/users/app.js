var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
var routes         = require('./routes');

app.use(express.static(__dirname + '/public'));

// morgan
app.use(morgan('dev'));

// body parer
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use method override
app.use(methodOverride());

// start routing
routes(app);

app.listen('4000');
console.log('node haitao server start...');
