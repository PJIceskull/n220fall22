function setup() {
    createCanvas(480, 120);
    strokeWeight(2);
}

function draw() {
    background(200);

    // Drawing Lines
    for (var i = 20; i < 400;) {
        line(i, 0, i + 1 / 2, 80);
    }
}