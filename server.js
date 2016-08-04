var express = require('express'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = {
	rootPath: __dirname
}

require('./server/config/express')(app, config);

//Mongoose
 mongoose.connect('mongodb://jesse:ichiban987@ds011933.mlab.com:11933/jlab_parse');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('JLab db opened');
  });

var messageSchema = mongoose.Schema({message: String}); 

var Message = mongoose.model('Message', messageSchema);

var mongoMessage;

Message.findOne({}).exec(function(err, messageDoc){
	// Message.create({message: ' Hello from MongoLab'});
	mongoMessage = messageDoc.message;
	console.log(mongoMessage);
});

app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0], {mongoMessage: mongoMessage});
  });

app.get('*', function(req, res) {
	res.render('index', {mongoMessage: mongoMessage});
});

var port = 3000;

app.listen(port);
console.log('Listening on port '+port+'....');