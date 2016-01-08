// dependencies
var express = require('express');
var mongoose = require('mongoose');

// establish the port
var port = 8080;

// connection to db
mongoose.connect('mongodb://localhost/Daisy');
var db = mongoose.connection;

// get the app going
var app = express();

// midolware
app.use(express.static(__dirname + '/public'));

// endpoints
app.post('api/moods', function(req, res) {
	console.log("Server got POST request");
})


// listen carefully
app.listen(port, function() {
	console.log("pushing ", port, " daisies...");
});






