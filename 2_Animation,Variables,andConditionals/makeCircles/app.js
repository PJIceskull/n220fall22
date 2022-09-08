// variable for ellipse's Size
// default size for circle
circleSize = 80;

function setup() {
    createCanvas(480, 480);
    // Make Background color of canvas Red
    background(200, 0, 0);
}

function draw() {
    // background(255)
    // when the mouse's clicks
    if (mouseIsPressed) {
        //  fill color is Black
        fill(0);
        // // fill color is Red
        // fill(255, 0, 0);
        // // Increase Circle Size
        circleSize = circleSize + 1;
    } else {
        // fill color is White
        fill(255);
        // Return Circle Size to default
        circleSize = 80;
    }
    // // Original Ellipse
    // ellipse(mouseX, mouseY, 80, 80);
    ellipse(mouseX, mouseY, circleSize, circleSize);
}