// Variables
displayResult = document.getElementById("displayResult"); // targert element with ID, display result;
resultNum = 0 // Have inital value be 0

// function for the user click generate button
function displayNum() {
    console.log("click");
    generateRandom(1, 10); // Generate a number between 1 and 10
    console.log(resultNum); // Print to console the result Number
}

// Order of Parameters in function is minimum Number to Max Number
function generateRandom(minNum, maxNum) {
    // Return a number from the assign lowest values and highest
    Math.floor(Math.random() * maxNum) + minNum;
    return resultNum; // Assign new Random number to result Variable 
}