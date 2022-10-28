// Variable
userName = document.getElementById("userName"); // Target element with the Id: userName
passWord = document.getElementById("passWord"); // Target element with the Id: passWord
verifyInfo = document.getElementById("verifyInfo");
// Target Element with ID, verifyInfo

// Print out Current Values of Username and Pssword
console.log(userName.value);
console.log(passWord.value);

function checkData() {
    // Test Function
    console.log(userName + " " + passWord);
    if (userName.value == "Username") {
        console.log("Correct");
    }
}