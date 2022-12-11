// Variables
const divBoxs = document.getElementsByClassName("box"); // Target elements with "Box" Class
let i = 0; // use i as a loop counter
let boxSize = 100; // Var for div box size. Use one value since width and height should be the same.
// Array that hold color values
// const colorPalette = ["#C41E3D", "#7D1128", "#FF2C55", "#3C0919", "#E2294F"];
const colorPalette = ["#F05D5E", "#0F7173", "#E7ECEF", "#272932", "#D8A47F", "#706563"];
// const colorPalette = ["#3B0D11", "#6A3937", "#706563", "#748386", "#9DC7C8"];
let selectedDiv = ""; // Global Variable with empty string 
let letterMarks = ["X", "O"]; // "X" & "O"Letter marks that can be use by thhe player/com
let turnCounter = 0; // Variable counting the number of turns
let textMessage = document.getElementById("textMessage");

const horizotnalRow = [
    [divBoxs[0], divBoxs[3], divBoxs[6]],
    [divBoxs[1], divBoxs[4], divBoxs[7]],
    [divBoxs[2], divBoxs[5], divBoxs[8]]
];
// const verticalRow = [
//     [],
//     [],
//     []
// ]

console.log(divBoxs); // Print divBox array
console.log(horizotnalRow);

// DOM Loop for targets the divs
for (i = 0; i < divBoxs.length; i++) {
    // console.log(divBoxs[i]); // Print to Console the each divBox in the Array

    // Assign the value in boxSize var to the divs' height and width
    divBoxs[i].style.height = boxSize + "px";
    divBoxs[i].style.width = boxSize + "px";
    divBoxs[i].style.backgroundColor = colorPalette[2]; // Assign a Color to the divs' bg color using the colorPalette array
    // divBoxs[i].innerHTML = i; // Print the Array index into the Div.

    // Function for mouse & divs interaction
    // When one of the divs are clicked
    // divBoxs[i].onclick = onMouseClick;

    // Event Listeners for Mouse Interactions 
    divBoxs[i].addEventListener("click", onMouseClick);
    divBoxs[i].addEventListener("mouseover", highLightDiv);
    divBoxs[i].addEventListener("mouseout", removeHighLight);

}

// Print out horizotnal row array
// console.log(winningRow[1][1]);

function onMouseClick(event) {
    // Var for Divs that are selected
    let selectedDiv = event.target; // Make the selected Div to event.target

    // Print to consle to the div that was selected
    console.log(event.target);

    // Remove any other event Listeners so that function won't be overwritten
    selectedDiv.removeEventListener("mouseout", removeHighLight);
    selectedDiv.removeEventListener("mouseover", highLightDiv);
    selectedDiv.removeEventListener("click", onMouseClick); // Remove click listener so div can only be clicked on once. 

    selectedDiv.style.color = colorPalette[0]; // Set font color to Black
    selectedDiv.style.backgroundColor = colorPalette[2]; // Change background to test function

    selectedDiv.innerHTML = letterMarks[0]; // Type a Letter into the Div

    // Turn Count
    console.log(turnCounter); // Print to console the count
    turnCounter += 1; // Add 1 to turn count

    determineRow(selectedDiv);

}

function highLightDiv(event) {
    // Var for Divs that ws selected
    let selectedDiv = event.target; // Make the selected Div to event.target

    // console.log(event.target); // Print to consle to the div that mouse is hovering

    // Change Background using a value in colorPalette
    selectedDiv.style.backgroundColor = colorPalette[5];
    // selectedDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    selectedDiv.innerHTML = letterMarks[0]; // Type LetterMarks into Div
    selectedDiv.style.color = colorPalette[3];
}
function removeHighLight(event) {
    // Var for Divs that ws selected
    let selectedDiv = event.target; // Make the selected Div to event.target
    selectedDiv.style.backgroundColor = colorPalette[2];
    selectedDiv.innerHTML = ""; // Remove text in Div
}

function determineRow(event) {
    let rowNum = 0
    // Horizontal Rows
    for (i = 0; i < 3; i++) {
        if (event == horizotnalRow[rowNum][i]) {
            textMessage.innerHTML += "WOW!";
        }
    }

    // // Vertical Rows
    // for (i = 0; i < 3; i++) {
    //     if (event == horizotnalRow[i][0]) {
    //         textMessage.innerHTML += "WOW!";
    //     }
    // }

    // Diagonal Rows
    // for (i = 0; i < 3; i++) {
    //     if (event == horizotnalRow[rowNum][i]) {
    //         textMessage.innerHTML += "WOW!";
    //     } else {
    //         rowNum++;
    //     }

    // }
}