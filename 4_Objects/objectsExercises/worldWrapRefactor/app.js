// Variables
var x = 0; // x position movement
var speed = 5; // move by 5 pixels

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(255);
    // Code for World Warp
    // Test
    // Draw lines to map out the boundaries.
    // line 1
    // line(0, 0, 0, 600)
    // line 2 
    // line(800, 0, 800, 600)
    // // Draw Circle and track it to mouse
    // ellipse(mouseX, mouseY, 50, 50);
    // // text the Boundaries
    // // if mouse's x position is 800
    // if (mouseX >= 800) { // x is greater 800 pixels,
    //     fill(0); // make fill color black
    // } else {
    //     fill(255) // make fill white
    // }

    x = x + speed; // x position/movement will increase by 5 pixels
    ellipse(x, 250, 75, 75); // draw ellipse

    if (x >= 800) { // if x value to greater than 800
        x = 0; // reset x value/position back to zero
    }
}