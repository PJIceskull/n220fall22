// Variable
let userValue = document.getElementById("userValue"); // Target tag with the ID: "userValue"


function printText() {
    let userText = userValue.innerHTML;

    console.log("Hello " + userText);
}