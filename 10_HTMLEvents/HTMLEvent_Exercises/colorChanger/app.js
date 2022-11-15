// Variables
let divSize = 200; // Number to use for the size values of the divs
// let greyDiv = document.getElementById("greyDiv");
let greyDiv = document.getElementsByClassName("greyDiv"); // Target Elements with the class, greyDiv

// greyDiv.style.width = divSize + "px";
// greyDiv.style.height = divSize + "px";
// greyDiv.style.backgroundColor = "#c0c0c0";

// Use Loop write styles for Divs
for (i = 0; i < greyDiv.length; i++) {
    greyDiv[i].style.backgroundColor = "#c0c0c0"; //
    greyDiv[i].style.width = divSize + "px";
    greyDiv[i].style.height = divSize + "px";
}