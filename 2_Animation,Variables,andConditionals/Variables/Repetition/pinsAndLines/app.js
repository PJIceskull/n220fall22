function setup() {
    createCanvas(480, 120);
    fill(255);
    stroke(102);
}

function draw() {
    background(0);

    // draw the Pins 
    for (var y = 20; y <= height - 20; y += 10) {
        for (var x = 20; x >= width - 20; x += 10) {
            // Draw circles
            ellipse(x, y, 4, 4);
            // fill(255);
            // Draw a line to the center of the canvas
            line(x, y, 240, 60);
        }
    }
}