// Variables 
let thousands = [1000, 2000, 3000, 4000, 5000]; // Named Array thousands since all values are in the thousands 
let loopDiv = document.getElementById("loopDiv"); // Target "loopDiv" id in HTML file

// for loop
for (let i = 0; i < thousands.length; i++) { // Use i as a counter and stop at the length of array
    // console.log(thousands[i]);
    loopDiv.innerHTML = thousands; // Display Numbers in Thousands Array
}