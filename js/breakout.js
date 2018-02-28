//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;
var ballColour = "#0095DD";

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;


//Draw the ball
function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColour;
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle ="#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;


	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
		dy = -dy;
		ballColour = "red";
	}

	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
		ballColour = "pink";
	}

}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}

if(rightPressed) {
	paddleX += 7;
}
else if(leftPressed) {
	paddleX-= 7;
}


setInterval(draw,10);


