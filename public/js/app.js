function happy() {
	console.log("I'm happy");
	drawGrin(150);
}

function mad() {
	console.log("I'm mad");
	drawGrin(0);
}

// draw the smiles on the face
function drawAvg() {
	// blah blah
	drawGrin(120);
}

function drawNow() {
	// blah blah
	var userInput = document.getElementById('userInput').value;

	// check for negative numbers, allow zero
	if(!userInput || userInput>10) alert("How hard is it to enter a value 0-10?");
	else drawGrin(userInput*15);
}