function setup() {
    createCanvas(480, 120);
}

function draw() {
    background(204);
    // Setting Stroke Weight
    // Set Stroke Weight to 1 pixel
    strokeWeight(1);
    ellipse(75, 60, 90, 90);
    // Set Stroke Weight to 8 pixels
    strokeWeight(8);
    ellipse(175, 60, 90, 90);
    ellipse(279, 60, 90, 90);
    // Set Stroke Weight to 20 pixels
    strokeWeight(20);
    ellipse(389, 60, 90, 90);
}