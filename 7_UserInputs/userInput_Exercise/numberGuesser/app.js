// Variables
let userGuess = document.getElementById("userGuess"); // Target the element with the ID, userGuess 
let textInsert = document.getElementById("textInsert"); // Target element with ID, textInsert
let verifyText = ["Way Too High! Try Guessing lower", "Too High", "BULLSEYE!!", "Way Too Low! Try guessing lower", "Too Low!"];

// Random generated number between 1 and 21 
let guessNumber = Math.floor(Math.random() * 21) + 1;
console.log(guessNumber);

// Function to check the user's guess
function checkGuess() { }