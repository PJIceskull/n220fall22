// Variables 
// // let key allows for more scope
// let name = "Travis"; // strings
// let age = "36"; // numerical data
// let hungry = true; // boolean

// Object Variable
let me = {
    // Varibles and Properties
    name: "Travis",
    age: 36,
    hungry: true,
    fashionSense: 1
}

let orb = {
    x: 200, y: 50, r: 15
}

me.age++; //
me.fashionSense = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    circle(orb.x, orb.y, orb.r);
    orb.y += 5;
}

function drawface(x, y) {

}