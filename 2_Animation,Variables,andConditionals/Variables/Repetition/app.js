function setup() {
    createCanvas(480, 120)
    // strokeWeight(8);
    strokeWeight(2);
}

function draw() {
    background(200);
    // // Line Pattern
    // line(20, 40, 80, 80);
    // line(80, 40, 140, 80);
    // line(140, 40, 200, 80);
    // line(200, 40, 260, 80);
    // line(260, 40, 320, 80);
    // line(320, 40, 380, 80);
    // line(380, 40, 440, 80);

    // // For Loop Function
    // for (var i = 20; i < 400; i += 60) {
    //     line(i, 40, i + 60, 80);
    // } // Code inside {} is called a block

    // Flexing your Loop Muscles
    for (var i = 20; i < 400; i += 8) {
        line(i, 40, i + 60, 80);
    }
}