// Variables
let mcDiv = document.getElementById("mcDiv"); // Target mcDiv ID in html file
var clickCount = 0; // Variable for counting the # of mouse clicks

// Target Div styles 
mcDiv.style.color = "#ffffff";
mcDiv.style.backgroundColor = "#0033cc";
mcDiv.style.width = "100px";
mcDiv.style.height = "100px";
mcDiv.style.margin = "0 auto";

// Onclick Function
function addText() {
    mcDiv.style.backgroundColor = "#ff6600"; // Change background color when click on
    mcDiv.innerHTML = "mc";
}