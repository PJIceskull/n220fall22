// Variables
let divSize = 200; // Number to use for the size values of the divs 
// let greyDiv = document.getElementById("greyDiv");
const greyDiv = document.getElementsByClassName("greyDiv"); // Target Elements with the class, greyDiv
const rgbColors = ["#ff0000", "#009933", "#0000e6"]; // Array for rgb color values

console.log(greyDiv)
// Use Loop write styles for Divs
for (i = 0; i < greyDiv.length; i++) {
    greyDiv[i].style.backgroundColor = "#c0c0c0"; //
    greyDiv[i].style.width = divSize + "px";
    greyDiv[i].style.height = divSize + "px";


}

function divClick() {
    console.log(greyDiv[i]);
}
