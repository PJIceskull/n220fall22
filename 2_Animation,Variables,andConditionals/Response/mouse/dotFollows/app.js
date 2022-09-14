function setup() {
    createCanvas(480, 120);
    fill(0, 102);
    // noStroke();
    // Draw Continuely
    strokeWeight(4);
}

function draw() {
    background(200); // background clears canvas
    ellipse(mouseX, mouseY, 20, 20);
}