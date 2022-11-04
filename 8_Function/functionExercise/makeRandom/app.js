// Variables
let displayResult = document.getElementById("displayResult"); // targert element with ID, display result;
let resultNum = 0; // Have inital value be 0

// function for the user click generate button
function displayNum() {
    console.log("click");
    generateRandom(1, 10); // Generate a number between 1 and 10
    console.log(resultNum); // Print to console the result Number
    // displayResult
}

// Order of Parameters in function is minimum Number to Max Number
function generateRandom(minNum, maxNum) {
    // Return a number from the assign lowest values and highest
    resultNum = Math.floor(Math.random() * maxNum) + minNum; // Assign new Random number to result Variable 
    return resultNum;
}