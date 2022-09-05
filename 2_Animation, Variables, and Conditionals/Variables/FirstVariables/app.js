// variables
var y = 60;
var d = 130;

// Examples of creating Variables
// var x; // Declare x as a variable
// x = 12; // Assign a value to x
// var x = 12; // Declare x as a variable and assign a value
// NOTE: You can't have two variable with the same name, or the program will behave strangely.

function setup() {
    createCanvas(480, 120)
}

function draw() {
    background(200);
    // // Testing out Variables
    // ellipse(75, y, d, d); // Left
    // ellipse(175, y, d, d); // Middle
    // ellipse(275, y, d, d); // Right

    // p5.js Variables
    line(0, 0, width, height);
    line(width, 0, 0, height);
}