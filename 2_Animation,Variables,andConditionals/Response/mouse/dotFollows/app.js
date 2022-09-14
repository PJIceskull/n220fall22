function setup() {
    createCanvas(480, 120);
    fill(0, 102);
    // noStroke();
    // Draw Continuely
    strokeWeight(4);
}

function draw() {
    background(200); // background clears canvas
    // ellipse(mouseX, mouseY, 20, 20);
    // line
    line(mouseX, mouseY, pmouseX, pmouseY); // pmouseX and pmouseY stores the position of the mouse in the previous frame
}