// variables
var x = 25;
var h = 20;
var y = 25;

function setup() {
    createCanvas(480, 120)
}

function draw() {
    background(200)
    // Math & Variables
    x = 20;
    rect(x, y, 200, h); // Top
    x = x + 100;
    rect(x, y + h, 300, h); // Middle
    x = x - 250;
    rect(x, y + h * 2, 300, h); // Bottom
}