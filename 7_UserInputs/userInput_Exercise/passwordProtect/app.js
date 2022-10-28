// Variable
let userName = document.getElementById("userName"); // Target element with the Id: userName
let passWord = document.getElementById("passWord"); // Target element with the Id: passWord
let verifyInfo = document.getElementById("verifyInfo");
// Target Element with ID, verifyInfo

// Print out Current Values of Username and Pssword
console.log(userName.value);
console.log(passWord.value);

function checkData() {
    // Test Function
    // console.log(userName + " " + passWord);
    // (passWord.value == "Password") 
    if (userName.value == "Username" && passWord.value == "Password") {
        console.log("Correct"); // Print "Correct" to console
        verifyInfo.innerHTML = "Correct";
        verifyInfo.style.color = "#009933"
    } else {
        console.log("WRONG!") // Print "Wrong" to console
        verifyInfo.innerHTML = "Wrong Information."
        verifyInfo.style.color = "#ff0000"
    }
}