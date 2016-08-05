var mongoose = require('mongoose');

module.exports = function(config) {

  mongoose.connect(config.db);
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


	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		userName: String
	});

	var User = mongoose.model('User', userSchema);
	User.findOne({}).exec(function(err, collection){
		console.log(collection);
		if(collection.length === 0) {
			User.create({firstName: 'Jesse', lastName: 'Soldat', userName: 'jsoldat'});
		}
		
	});

}