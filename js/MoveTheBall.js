funtion drawball() {
	ctx.beginPath();
	ctx.arc(x,y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawball();
	x += dx;
	y += dy;
}
	