function setup() {
    createCanvas(500, 500);
}

function draw() {
    // background color for Canvas
    background(200);
    // Grid for labeling out Points 
    // point(50, 125)
    // point(150, 125)
    // point(250, 125)
    // point(350, 125)
    // point(450, 125)
    // // 
    // point(50, 250)
    // point(150, 250)
    // point(250, 250)
    // point(350, 250)
    // point(450, 250)
    // // 
    // point(50, 375)
    // point(150, 375)
    // point(250, 375)
    // point(350, 375)
    // point(450, 375)

    // line(x1, y1, x2, y2)

    // Star
    // These are my starting lines
    // line 1
    line(250, 125, 200, 250)
    // line 2
    line(250, 125, 300, 250)

    // line 3
    // The Horizaontal Line
    line(190, 160, 310, 160)

    // These lines connect to the ends of Line 3 and Lines 1 & 2
    // line 4
    line(300, 250, 190, 160);
    // line 5
    line(200, 250, 310, 160);

    fill(0, 00)

}