// dependencies
var express = require('express');

// establish the port
var port = 8080;

// initialize the app
var app = express();

// midolware
app.use(express.static(__dirname + '/public'));

// listen carefully
app.listen(port, function() {
	console.log("pushing ", port, " daisies...");
});






