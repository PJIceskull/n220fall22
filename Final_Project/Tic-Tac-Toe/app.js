// Variables
const divBoxs = document.getElementsByClassName("box"); // Target elements with "Box" Class
let i = 0; // use i as a loop counter
let boxSize = 100; // Var for div box size. Use one value since width and height should be the same.
// Array that hold color values
// const colorPalette = ["#C41E3D", "#7D1128", "#FF2C55", "#3C0919", "#E2294F"];
const colorPalette = ["#F05D5E", "#0F7173", "#E7ECEF", "#272932", "#D8A47F"];
// const colorPalette = ["#3B0D11", "#6A3937", "#706563", "#748386", "#9DC7C8"];


// DOM Loop for targets the divs
for (i = 0; i < divBoxs.length; i++) {
    console.log(divBoxs[i]); // Print to Console the divBox's index

    // Assign the value in boxSize var to the divs' height and width
    divBoxs[i].style.height = boxSize + "px";
    divBoxs[i].style.width = boxSize + "px";
    divBoxs[i].style.backgroundColor = colorPalette[2]; // Assign a Color to the divs' bg color using the colorPalette array

    // When one of the divs are clicked
    // divBoxs[i].onclick = onMouseClick;
    divBoxs[i].addEventListener("click", onMouseClick);
}


function onMouseClick(event) {
    // Var for Divs that ws selected
    selectedDiv = event.target; // Make the selected Div to event.target
    // Print to consle to the div that was selected
    // console.log(i);
    console.log(event.target);
    // console.log(divBox[i]);
    // console.log(divBox[i - 1]);
    selectedDiv.style.backgroundColor = colorPalette[1]; // Change background to test function
}