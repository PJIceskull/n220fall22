function setup() {
    createCanvas(480, 120);
    fill(0, 102);
    noStroke();
}

function draw() {
    background(200)
    ellipse(mouseX, mouseY, 9, 9);
}