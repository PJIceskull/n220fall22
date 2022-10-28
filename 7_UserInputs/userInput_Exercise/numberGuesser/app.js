// Variables
let userGuess = document.getElementById("userGuess"); // Target the element with the ID, userGuess 
let textInsert = document.getElementById("textInsert"); // Target element with ID, textInsert
let verifyText = ["Way Too High! Try Guessing lower", "BULLSEYE!!", "Way Too Low! Try guessing Higher"]; // Text placeholders for the user's answer

// Random generated number between 1 and 20 
let guessNumber = Math.floor(Math.random() * 20) + 1;
console.log(guessNumber); // Print to console random number

// Function to check the user's guess
function checkGuess() {
    if (userGuess.value == guessNumber) { // if user's guess is the random number
        textInsert.innerHTML = verifyText[1]; // Say Bullseye!
        textInsert.style.color = "#009933"; // set font color to green
    } else if (userGuess.value > guessNumber) { // if user guess if higher than random number
        textInsert.innerHTML = verifyText[0]; // Say user was too high
        textInsert.style.color = "#000000"; // set font color to black
    } else { // if user guess is less than random number
        textInsert.innerHTML = verifyText[2]; // say user was too loe
        textInsert.style.color = "#000000"; // set font color to black
    }

}