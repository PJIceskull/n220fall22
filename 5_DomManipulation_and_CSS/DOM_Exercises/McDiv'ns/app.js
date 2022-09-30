// Variables
let mcDiv = document.getElementById("mcDiv"); // Target mcDiv ID in html file
var clickCount = 0; // Variable for counting the # of mouse clicks
let mcText = "mc";

// Target Div styles 
mcDiv.style.color = "#ffffff";
mcDiv.style.backgroundColor = "#0033cc";
mcDiv.style.width = "150px";
mcDiv.style.height = "150px";
mcDiv.style.margin = "0 auto";
mcDiv.innerHTML = mcText;

// Onclick Function
function addText() {
    mcText = mcText + "mc"; // Add one "mc" text to mcTExt string 
    mcDiv.innerHTML = mcText;
    clickCount = clickCount + 1;
    console.log(clickCount);
    if (clickCount >= 3) {
        mcDiv.style.backgroundColor = "#ff6600"; // Change background color when click on
        mcDiv.innerHTML = "divdivdiv";
    }
    // mcDiv.innerHTML = "mc" + "mc";
    // mcDiv.appendChild()
}