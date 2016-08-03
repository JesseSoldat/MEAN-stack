var express = require('express'),
    bodyParser = require('body-parser'),
	stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));



app.get('*', function(req, res) {
	res.render('index');
});

var port = 3000;

app.listen(port);
console.log('Listening on port '+port+'....');