// Variables
let mcDiv = document.getElementById("mcDiv"); // Target mcDiv ID in html file
var clickCount = 0; // Variable for counting the # of mouse clicks
let mcText = "mc"; // Create Text String for "mc" Text

// Target Div styles 
mcDiv.style.color = "#ffffff"; // Set color of text to White
mcDiv.style.backgroundColor = "#0033cc"; // Set BG color to a blue-ish color
// Set the Width & height of the Div to 150px
mcDiv.style.width = "150px";
mcDiv.style.height = "150px";
mcDiv.style.margin = "0 auto"; // Set Div to the center of the screen
mcDiv.innerHTML = mcText;

// Onclick Function
function addText() {
    mcText = mcText + "mc"; // Add one "mc" text to mcTExt string 
    mcDiv.innerHTML = mcText;
    clickCount = clickCount + 1; // Increase the ClickCount by 1
    console.log(clickCount); // Print the number of the clickCount to Console
    if (clickCount >= 3) { // If the clickCount is equal to or greater than 3
        mcDiv.style.backgroundColor = "#ff6600"; // Change background color when click on
        mcDiv.innerHTML = "divdivdiv";
    }
    // mcDiv.innerHTML = "mc" + "mc";
    // mcDiv.appendChild()
}