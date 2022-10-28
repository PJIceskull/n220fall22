// Variables
let userGuess = document.getElementById("userGuess"); // Target the element with the ID, userGuess 
let textInsert = document.getElementById("textInsert"); // Target element with ID, textInsert
let verifyText = ["Way Too High! Try Guessing lower", "BULLSEYE!!", "Way Too Low! Try guessing Higher"];

// Random generated number between 1 and 20 
let guessNumber = Math.floor(Math.random() * 20) + 1;
console.log(guessNumber); // Print to console random number

// Function to check the user's guess
function checkGuess() {
    if (userGuess.value == guessNumber) {
        textInsert.innerHTML = verifyText[1];
        textInsert.style.color = "#009933";
    } else if (userGuess.value > guessNumber) {
        textInsert.innerHTML = verifyText[0];
        textInsert.style.color = "#000000";
    } else {
        textInsert.innerHTML = verifyText[2];
        textInsert.style.color = "#000000";
    }

}