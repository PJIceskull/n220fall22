// Variables
let userInput = document.getElementById("userInput"); // Target Element with ID, userInput
let textResult = document.getElementById("textResult"); // Target Element with ID, textResult

console.log(userInput); // Print to the console the userInput

// Function to check the number that user entered
function checkNum() {
    console.log(userInput.value); // PRint to console the user's input
}

// Function is see if number is divisible by Number/7
function isDivisible(num) { // "num" stands for number
    // "quotient" is the solution in dividing numbers
    quotient = userInput.value % num; // The user's value divided by our number
    console.log(quotient); // Print to console the "Quotient"
    if (quotient == 0) {
        return true;
    }
    return false;
}