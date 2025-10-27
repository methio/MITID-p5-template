const button = document.getElementById("button");
let color = 225;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(color);
  ellipse(width/2, height/ 2, 200);
  
}

button.addEventListener( "click", () => {
  color = random(0, 255);
});