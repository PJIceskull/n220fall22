// Variables
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
    createCanvas(480, 120);
    stroke(0, 102);
}
function draw() {
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseX;
    x += (targetY - y) * easing;
}