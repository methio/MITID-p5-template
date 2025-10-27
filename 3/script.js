function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("red");
  for(let i= 0; i < 10; i++){
    ellipse(i * 25 + 20, 200 , 20, 20);
  }
  
}