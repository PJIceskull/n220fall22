function setup() {
    createCanvas(480, 120);
    stroke(0, 102);
}
function draw() {
    // dist() function measures the current and previous mouse position
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(102);
    line(mouseX, mouseY, pmouseX, mouseY);
}