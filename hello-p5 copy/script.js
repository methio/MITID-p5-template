// 👉🏻 https://p5js.org/reference/

const myButton = document.getElementById("myButton");


function setup() {
    // setup run once
    createCanvas(500, 500);

    angleMode(DEGREES);

}

function draw() {
    // draw run repeatedly
    // background(200);

    // strokeWeight(5);
    // stroke(0, 0, 255);
    // fill(255, 0, 0); // fill takes 3 parameters : amount of red, green and blue
    // circle(300, 50, 100 );

    // //noStroke();
    // // let randomRColor = random(0, 255);
    // // let randomGColor = random(0, 255);
    // // let randomBColor = random(0, 255);
    // // fill(randomRColor, randomGColor, randomBColor);
    // rect(0, 0, mouseX, mouseY);

    
    circle(mouseX, mouseY, 50, 50);
    circle(mouseX - 12, mouseY - 25, 30, 30);
    circle(mouseX + 15, mouseY - 25, 30, 30);
    circle(mouseX + 25, mouseY, 30, 30);
    circle(mouseX + 15, mouseY + 20, 30, 30);
    circle(mouseX - 15, mouseY + 25, 30, 30);
    circle(mouseX - 25, mouseY, 30, 30);

    line(100, 0, 100, 500);
    line(200, 0, 200, 500);

    noFill();
    stroke(255, 255,0);
    strokeWeight(20);
    arc(0, 0, 200, 200, 0, 220, OPEN);





    
}

myButton.addEventListener("click", function(){
    // do stuffs 
    let randomColor = random(0,255);
    background(randomColor);
});