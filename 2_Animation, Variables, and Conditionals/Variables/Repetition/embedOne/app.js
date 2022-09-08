// var x;
// var y;

function setup() {
    createCanvas(480, 120);
    noStroke();
}

function draw() {
    background(200);
    // loop
    for (var y = 0; y <= height; y += 40) {
        for (var x = 0; x <= width; x += 40) {
            fill(115, 140);
            ellipse(x, y, 40, 40);
        }
    }
}