function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(200);
    // invoke the function
    drawFace(400, 400);
    drawFace(10, 10);
    drawFace(400, 10);
    drawFace(mouseX, mouseY)
}

function drawFace(x, y) { //() --> Arguments?
    // Draw a Face
    line(x, y, x + 10, y + 10);
    fill(255, 0, 0)
    circle(x + 30, y + 30, 60);
    circle(x + 10, y + 10, 5);
    circle(x + 30, y + 10, 5);
    circle(x + 15, y + 30, 5);
}