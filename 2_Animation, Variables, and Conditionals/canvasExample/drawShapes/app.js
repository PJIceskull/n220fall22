// use setup to draw canvas
function setup() {
    createCanvas(480, 240);
    // background(205);
}

// use draw to make shapes or backgrounds
function draw() {
    // background color
    background(205);
    // Shapes Reference
    // line(x1, y1, x2, y2)
    // triangle(x1, y1, x2, y2, x3, y3)
    // quad(x1, y1, x2, y2, x3, y3, x4, y4)
    // rect(x, y, width, height)
    // ellipse(x, y, width, height)
    // arc(x, y, width, height, start, stop)

    // draw Line
    // line(20, 50, 420, 110);

    // Basic Shape
    quad(158, 55, 199, 14, 392, 66, 351, 107);
    triangle(347, 54, 392, 9, 392, 66);
    triangle(158, 55, 290, 91, 290, 112);
}