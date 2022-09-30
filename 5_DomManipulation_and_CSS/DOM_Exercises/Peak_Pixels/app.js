// Variables 
let squareDiv = document.getElementById("squareDiv");
let divHeight = 100; // height of the div is 100 px

// Square Div styles
squareDiv.style.width = divHeight + "px";
squareDiv.style.height = divHeight + "px";
squareDiv.style.color = "#FFFFFF";
squareDiv.style.backgroundColor = "#049a04";
squareDiv.style.margin = "0 auto";

function enLarge() {
    // squareDiv.style.backgroundColor = "#000"; // Change Background Color to test Function
    squareDiv.style.height = divHeight * 1.1 + "px";
    squareDiv.style.width = divHeight * 1.1 + "px";
    // divHeight * 1.1 + "px";
}