const color1 = "#4b8c84";
const color2 = "#ddd0c5";
const circleSize = 100;


function setup() {
  createCanvas(500, 500);
  background(color1);
  //noFill();
  fill(color1);
  stroke(color2);
  strokeWeight(2);
}

function mouseDragged() {
  circle(mouseX, mouseY, circleSize);
}