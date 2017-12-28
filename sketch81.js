
 function setup() {
 	createCanvas(displayWidth, displayHeight);
	strokeWeight(0)
	stroke(0);
}

function touchMoved() {
	ellipse(mouseX, mouseY, 120, 120);
	fill(pmouseX * 1/5, pmouseY * 1/3, pmouseX * 1/5);
	return false;
}
