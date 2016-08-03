var express = require('express'),
	stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


app.use(express.static(__dirname + '/public'));



app.get('*', function(req, res) {
	console.log(res);
});

var port = 3000;

app.listen(port);
console.log('Listening on port '+port+'....');