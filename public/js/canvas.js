
function drawGrin(moodRate) {

	var canvas = document.getElementById('drawGrin');
	var ctx = canvas.getContext('2d');

	//clear the canvas before drawing
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// draw the smile
	ctx.lineWidth = 8;
	ctx.beginPath();
	// starting point x, y
	ctx.moveTo(25, 75);
	// cpX, cpY(dynamic), x(end pt), y(end pt)
	ctx.quadraticCurveTo(150, moodRate, 275, 75);
	ctx.stroke();

}
drawGrin(75);

