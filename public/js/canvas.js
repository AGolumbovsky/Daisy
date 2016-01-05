
function drawGrin(moodRate) {

	var canvas = document.getElementById('drawGrin');
	var ctx = canvas.getContext('2d');

	//clear the canvas before drawing
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// draw the smile
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(50, 75);
	ctx.quadraticCurveTo(150, moodRate, 250, 75);
	ctx.stroke();

}
drawGrin(75);

function drawAvg() {
	// blah blah
	drawGrin(120);
}

function drawTranslate() {
	// blah blah
	var userInput = document.getElementById('userInput').value;

	// check for negative numbers, allow zero
	if(!userInput || userInput>10) alert("How hard is it to enter a value 0-10?");
	else drawGrin(userInput*15);
}