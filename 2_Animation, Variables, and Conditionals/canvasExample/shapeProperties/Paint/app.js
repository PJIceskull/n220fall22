function setup() {
    createCanvas(480, 120);

    // Draw with Color
    noStroke();
}

function draw() {
    // // Painting with Grays
    // background(0); // Black 
    // fill(204); // Light Gray
    // ellipse(132, 82, 200, 200); // Light Gray Circle
    // fill(153); // Medium Gray
    // ellipse(228, -16, 200, 200); // Medium Gray Circle
    // fill(102); // Dark Gray
    // ellipse(268, 118, 200, 200); // Dark Gray Circle

    // // Draw with Color
    // background(0, 26, 51); // Dark Blue Background
    // fill(255, 0, 0); // Red Fill Color
    // ellipse(132, 82, 200, 200); // Red Circle
    // fill(0, 255, 0); // Green Fill Color
    // ellipse(228, -16, 200, 200); // Green Circle
    // fill(0, 0, 255); // Blue Fill Color
    // ellipse(268, 118, 200, 200); // Blue Circle

    // Set Transparency 
    // add a 4th Parameter fill(), which wll control the Opacity
    background(204, 226, 225); // Light Blue Background
    fill(255, 0, 0, 160); // Red Fill Color
    ellipse(132, 82, 200, 200); // Red Circle
    fill(0, 255, 0, 160); // Green Fill Color
    ellipse(228, -16, 200, 200); // Green Circle
    fill(0, 0, 255, 160); // Blue Fill Color
    ellipse(268, 118, 200, 200); // Blue Circle
}