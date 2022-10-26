// Variables
fortunes = ["Your time to now!", "You will die eventually.", "You will be succesfully in life."]; // Arrays for fortunes
newFortune = document.getElementById("newFortune"); // Target Div with the ID "newFortune"

function getFortune() {
    console.log("Clicked"); // Print to console when button is clicked
    // Put random variable inside function
    let randIndex = Math.floor(Math.random() * fortunes.length); // Generate Random Value with the length of our array
    let randEntry = fortunes[randIndex]; // Assign the random index of our Fortune Arrays to randEntry Var

    newFortune.innerHTML = randEntry; // Assign the radnom generated fortune entry into the div. 
}