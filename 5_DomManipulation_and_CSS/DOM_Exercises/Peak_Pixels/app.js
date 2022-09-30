// Variables 
let squareDiv = document.getElementById("squareDiv");
let divHeight = 100; // height of the div is 100 px
var increaseSize = 1.1; // Variable that increase values by 10%

// Square Div styles
squareDiv.style.width = divHeight + "px";
squareDiv.style.height = divHeight + "px";
squareDiv.style.color = "#FFFFFF";
squareDiv.style.backgroundColor = "#049a04";
squareDiv.style.margin = "0 auto";
squareDiv.style.textAlign = "center";

function enLarge() {
    // squareDiv.style.backgroundColor = "#000"; // Change Background Color to test Function
    divHeight = divHeight * increaseSize; // New div size value is the divHeight time increaseSize, which is 100 x 1.1
    squareDiv.style.height = divHeight + "px";
    squareDiv.style.width = divHeight + "px";
    // squareDiv.style.height = divHeight * increaseSize + "px";
    // squareDiv.style.width = divHeight * increaseSize + "px";
    // divHeight * 1.1 + "px";
}