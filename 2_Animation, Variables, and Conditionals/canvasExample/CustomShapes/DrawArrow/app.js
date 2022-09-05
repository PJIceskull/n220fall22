function setup() {
    createCanvas(480, 120);
}

function draw() {
    background(204);

    // beginShape() signals the start of a new shape
    // vertex() defines the x and y coordinates for the shape
    // EndShape() signals the end of a new shape

    // Arrow
    beginShape();
    vertex(180, 82); // Vertex 1
    vertex(207, 36); // Vertex 2
    vertex(214, 63); // Vertex 3
    vertex(407, 11); // Vertex 4
    vertex(412, 30); // Vertex 5
    vertex(219, 82); // Vertex 6
    vertex(226, 109); // Vertex 7
    // endShape();
    endShape(CLOSE); // To close the gap of a Shape add CLOSE inside of endshape();
}
