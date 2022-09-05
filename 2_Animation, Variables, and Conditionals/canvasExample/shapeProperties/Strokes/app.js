function setup() {
    createCanvas(480, 120);
    strokeWeight(12);
}

function draw() {
    background(204);

    // // Setting Stroke Weight
    // // Set Stroke Weight to 1 pixel
    // strokeWeight(1);
    // ellipse(75, 60, 90, 90);
    // // Set Stroke Weight to 8 pixels
    // strokeWeight(8);
    // ellipse(175, 60, 90, 90);
    // ellipse(279, 60, 90, 90);
    // // Set Stroke Weight to 20 pixels
    // strokeWeight(20);
    // ellipse(389, 60, 90, 90);

    // Set Stroke Attributes
    // The strokeJoin() functions changes the line are joined (corners!)
    strokeJoin(ROUND); // Round the stroke corners
    rect(40, 25, 70, 70);
    strokeJoin(BEVEL); // Bevel the stroke corners
    rect(140, 25, 70, 70);
    // strokeCap() changes the how lines are drawn at their beginning and end.
    strokeCap(SQUARE); // SQUARE the line endings
    line(270, 25, 340, 95);
    strokeCap(ROUND); // ROUND The Line endings
    line(350, 25, 420, 95);
}