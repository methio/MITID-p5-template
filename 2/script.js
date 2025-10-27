// 👉🏻 https://p5js.org/reference/

let img; 

function preload(){
 img = loadImage("kirby.png");
}


function setup() {
    // setup run once
    createCanvas(500, 500);
    background(200);

}

function draw() {
    // draw run repeatedly
    // background(200);

}

function mouseDragged(){
    image(img, mouseX, mouseY, 40, 40);
}