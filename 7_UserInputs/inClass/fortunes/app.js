// Variables
fortunes = ["Your time to now!", "You will die eventually.", "You will be succesfully in life."]; // Arrays for fortunes
newFortune = document.getElementById("newFortune"); // Target Div with the ID "newFortune"
// Vars for random values
let randIndex = Math.random() * fortunes.length;
let randEntry = fortunes[randIndex];

function getFortune() {
    console.log("CLicked") // PRint to console when button is clicked
}