// Variables 
let squareDiv = document.getElementById("squareDiv"); // Target the squareDiv ID on div
let divHeight = 100; // height of the div is 100 px
var increaseSize = 1.1; // Variable that increase values by 10%

// Square Div styles
squareDiv.style.width = divHeight + "px"; // code Div width with divHeight and px/pixels unit
squareDiv.style.height = divHeight + "px"; // code Div height with divHeight and px/pixels unit
squareDiv.style.color = "#FFFFFF"; // Make the Color of the text White
squareDiv.style.backgroundColor = "#049a04"; // Make Div background color to a greenish color
squareDiv.style.margin = "0 auto"; // Positon margins and div to the center of the screen 
squareDiv.style.textAlign = "center"; // Align the text inside the div to the center

function enLarge() {
    // squareDiv.style.backgroundColor = "#000"; // Change Background Color to test Function
    divHeight = divHeight * increaseSize; // New div size value is the divHeight time increaseSize, which is 100 x 1.1
    squareDiv.style.height = divHeight + "px";
    squareDiv.style.width = divHeight + "px";
    // Original Code
    // squareDiv.style.height = divHeight * increaseSize + "px";
    // squareDiv.style.width = divHeight * increaseSize + "px";
    // divHeight * 1.1 + "px";
}