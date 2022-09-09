function setup() {
    createCanvas(800, 600); // canvas(width,height)
}

function draw() {
    background(255);
    // Draw lines to map out the boundaries.
    // line 1
    line(0, 0, 0, 600)
    // line 2 
    line(800, 0, 800, 600)
    // Draw Circle and track it to mouse
    ellipse(mouseX, mouseY, 40, 40);

    // text the Boundaries
    // if mouse's x position is 800
    if (mouseX >= 800) { // x is greater 800 pixels,
        fill(0); // make fill color black
    } else {
        fill(255)
    }

}