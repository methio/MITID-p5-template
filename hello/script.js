

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();

    createStack(100, 300, "#550099");

    let randomX = random(0, 600);
    let randomColor = color(random(0,255), random(0,255), random(0,255));
    createStack(randomX, 300, randomColor);

    

}

function draw(){
    // function that runs repeatedly
    //background(73);

    circle(mouseX, mouseY, 100);
}


function createStack(posX, posY, color){
    fill(color);
    for(let i = 0; i < 10; i++){
        circle(posX, posY + i * 10, 20)
    }
}