function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  fill("red");
  for(let i= 0; i < 10; i++){

    if(i%2==0){
      ellipse(i * 25 + 20, 200 , 20, 20);
    }else{
      rect(i * 25 + 20, 200 , 20, 20);
    }
  }
  
}