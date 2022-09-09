circleSize = 30; // set the size of your circles to be 30 pixels

function setup() {
    // Create a canvas for the program with createCanvas(width, height)
    createCanvas(400, 300); // Creates the width and height of our canvas
    // background(225); // set background color to a light gray color
    background(255); // set background color to white 
    noStroke(); // remove stroke of the circle
}

// red hex code: rgb(255,0,0)
// red hex code: rgb(0,0,255)
function draw() {
    // Draw a ellipse to follow our cursor.
    // set the size of the size with circleSize, which would be 30
    // Have the circle track the mouse by using mouseX and MouseY
    ellipse(mouseX, mouseY, circleSize, circleSize)

    // draw a circle if the mouse is being clicked
    // Test for mouse being click
    if (mouseIsPressed) { // If the mouse is being pressed/click
        // fill(0); // fill color black
        // write if statement to draw a circle depending the mouse's position using the Canvas's size.
        // 400 / 2 = 200, width of both left and right canvas sides
        // X > 200 = right of canvas
        // X < 200 = left of canvas
        if (mouseX > 200) { // If the mouse's position is greater than 200,
            fill(255, 0, 0); // Make the fill of the circle Red.
        } else { // if the mouse positon is less 200,
            fill(0, 0, 255); // Make Fill of the the circle Blue
        }

    } else { // if Mouse is not being pressed
        fill(255); // fill color white
    }
}