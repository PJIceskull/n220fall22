let mouseVal = { x: 0, y: 0 }; // maps the x and y values to zero 
// change aou var name to mouseVal

function setup() {
    createCanvas(400, 400); // draw a 400x400 canvas
}

function draw() {
    background(220); // draw a light gray background color

    // if Mouse is being pressed, map the x and y values to the mouse coords
    if (mouseIsPressed) {
        mouseVal.x = mouseX;
        mouseVal.y = mouseY;
    }

    let zah = distance(mouseVal, { x: mouseX, y: mouseY }); // inline object

    // if zah coord is greater than 120 px, change the stroke fill to red
    if (zah > 120) { // If statement is missing a opening "{"
        // stroke(255, 0, 0); //rgb(255,0,0)
        stroke("#FF0000"); //rgb(255,0,0)
    } else { // there should be no "if" after else statement
        stroke("#000000"); // stroke is missing a closing quote,
        // stroke(0); // stroke is missing a closing quote,
    }

    line(mouseVal.x, mouseVal.y, mouseX, mouseY); // missing a "," and misspelled mouseY as "mooseY"
    // console.log(distance);
    // print(distance);

}

// distance function
function distance(p1, p2) {

    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;

    //return the distance
    Math.sqrt(dx * dx + dy * dy);
}