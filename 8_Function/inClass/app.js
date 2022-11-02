// Variables
let vowels = ["a", "e", "i", "o", "u"];
let userInput = document.getElementById("userInput"); // Target ID with "userInput"
let testString = "Spoookoy";
let result = removeVowel(testString);


console.log(vowels);
console.log(result);

// Function One - Identify Vowel
function isVowel(char) {
    let letter = char.toLocaleLowerCase();
    for (i = 0; i < vowels.length; i++) {
        if (letter == vowels[i]) {
            return true;
        }
    }
    return false;
}

// function checkLetter() {
//     let inputWord = userInput.value; // Local Variable to hold user input value
//     console.log(inputWord); // Print to console the user's input
//     for (i = 0; i > userInput.value; i++) { }
// }

// Function Two - Remove Vowels
function removeVowel(inputStr) {
    let returnStr = "";
    for (let i = 0; i < inputStr.length; i++) {
        if (!isVowel(inputStr[i])) {
            returnStr += inputStr[i];
        }
    }
    return returnStr;
}
