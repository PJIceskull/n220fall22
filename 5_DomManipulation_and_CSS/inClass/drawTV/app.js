// Variables
// Create a Variable that targets the class for your tv

function setup() {
    createCanvas(800, 600);
}

let tv = {
    x: 230, y: 200, l: 400, w: 250, // TV Sizes
    tvColor: "#000000", // TV Color
    screenColor: "#FFFFFF",
    power: true,
    // antennaX: 15, antennaY: 15,
    // Arrays do not need names
}

function drawTV() {
    fill(tv.tvColor); // Color of the TV will be black
    rect(tv.x, tv.y, tv.l, tv.w); // Use Variables for the TV sizes
    fill(tv.screenColor); // Set the inside color to white
    rect(250, 220, 360, 210);
    // line(tv.x, tv.y,)
}

function draw() {
    drawTV();
}