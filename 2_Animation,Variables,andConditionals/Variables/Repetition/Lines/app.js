function setup() {
    createCanvas(480, 120);
    strokeWeight(2);
}

function draw() {
    background(200);

    // Drawing Lines
    for (var i = 20; i < 400; i += 20) {
        line(i, 0, i + i / 2, 80);
        // Connecting the Lines
        line(i + i / 2, 80, i * 1.2, 120);
    }
}