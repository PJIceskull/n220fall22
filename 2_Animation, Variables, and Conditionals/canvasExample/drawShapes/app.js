// use setup to draw canvas
function setup() {
    createCanvas(480, 240);
    // background(205);
    angleMode(DEGREES);
}

// use draw to make shapes or backgrounds
function draw() {
    // // background color
    background(205);
    // // Shapes Reference
    // line(x1, y1, x2, y2)
    // triangle(x1, y1, x2, y2, x3, y3)
    // quad(x1, y1, x2, y2, x3, y3, x4, y4)
    // rect(x, y, width, height)
    // ellipse(x, y, width, height)
    // arc(x, y, width, height, start, stop)

    // // draw Line
    // line(20, 50, 420, 110);

    // // Basic Shape
    // quad(158, 55, 199, 14, 392, 66, 351, 107);
    // triangle(347, 54, 392, 9, 392, 66);
    // triangle(158, 55, 290, 91, 290, 112);

    // // Draw Rectangle
    // rect(180, 60, 220, 40);

    // // Draw a Circle/Ellipse
    // ellipse(278, -100, 400, 400);
    // ellipse(120, 100, 110, 110);
    // ellipse(412, 60, 18, 18);

    // Draw a part of a Circle using Arcs

    // Using PI Values for Radians 
    arc(90, 60, 80, 80, 0, HALF_PI);
    arc(190, 60, 80, 80, 0, PI + HALF_PI);
    arc(290, 60, 80, 80, PI, TWO_PI + HALF_PI);
    arc(390, 60, 80, 80, QUARTER_PI, PI + QUARTER_PI);
    // Using Degrees for Radians 
    arc(90, 150, 80, 80, 0, radians(90));
    arc(190, 150, 80, 80, 0, radians(270));
    arc(290, 150, 80, 80, radians(180), radians(450));
    arc(390, 150, 80, 80, radians(45), radians(225));

}