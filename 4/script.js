function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("#FE2");
  stroke(200, 100, 100);
  strokeWeight(mouseX/10);
  for(let i= 0; i < 20; i++){
    ellipse(random(0, width), random(0, height), 20, 20);
  }
  
}