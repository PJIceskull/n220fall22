// Variables
let userInput = document.getElementById("userInput"); // Target Element with ID, userInput
let textResult = document.getElementById("textResult"); // Target Element with ID, textResult

// console.log(userInput); // Print to the console the userInput

// Function to check the number that user entered
function checkNum() {
    console.log(userInput.value); // PRint to console the user's input
    isDivisible(7); // find if value is divisibe by 7
    if (isDivisible(7) == true) { // if true
        console.log("is Divisible!"); // print "is Divisible"
        textResult.innerHTML = "This number can be divide by 7!"; // Insert text to div
    } else { // if not
        console.log("Not Divisible!"); // Print "Not divisible"
        textResult.innerHTML = "This number can NOT be divide by 7!"; // Insert text to Div
    }

    textResult.style.color = "#713471" // Set font color to purple
    textResult.style.fontSize = 24 + "px"; // set fontsize to 24 pixels

}

// Function is see if number is divisible by Number/7
function isDivisible(num) { // "num" stands for number
    // "quotient" is the solution in dividing numbers
    quotient = userInput.value % num; // The user's value divided by our number
    // console.log(quotient); // Print to console the "Quotient"
    if (quotient == 0) { // If the remainder is "0"
        return true; // return "true"
    }
    return false; // else, return "False"
}