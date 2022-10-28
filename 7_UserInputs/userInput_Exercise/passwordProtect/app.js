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
    if (userName.value == "Username" && passWord.value == "Password") { // If both Username and PAssword are Correct
        console.log("Correct"); // Print "Correct" to console
        verifyInfo.innerHTML = "Sucess";
        verifyInfo.style.color = "#009933"
    } else if (userName.value != "Username" && passWord.value == "Password") { // If Username is WRONG but Password is RIGHT
        console.log("Incorrect Username");
        verifyInfo.innerHTML = "Username is Incorrect"
    } else if (passWord.value != "Password" && userName.value == "Username") { // If Password is WRONG but Username is RIGHT
        console.log("Incorrect Password");
        verifyInfo.innerHTML = "Password is Incorrect"
    } else { // IF both are wrong
        console.log("WRONG!") // Print "Wrong" to console
        verifyInfo.innerHTML = "Wrong Information."
        verifyInfo.style.color = "#ff0000"
    }
}