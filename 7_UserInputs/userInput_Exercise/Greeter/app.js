// Variable
let userValue = document.getElementById("userValue"); // Target tag with the ID: "userValue"
let greetText = document.getElementById("greetText"); // target element with theID, greet Text

console.log(userValue.value); // Print to Console the current value

function printText() {
    // let userText = userValue.innerHTML;
    let userText = userValue.value; // Assign the value the User typed to var UserText

    console.log("Hello" + " " + userText); // Print to Console "Hello + "User Value" "

    greetText.innerHTML = "Hello " + userText; // Say Hello and UserText
}