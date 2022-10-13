// Variables
let divLoop = document.getElementById("divLoop"); // Target the div with the id named "divLoop"
let iterand = 0; // Variable to count the number iterations in our Loop
text = "Count is";


// Loop
for (var i = 0; i <= 25; i++) { // Use i value to count loop
    iterand = "" + i;
    // console.log(i); // use console log to count the number of times that the lop runs
    console.log(iterand); // Print the number of times that iterand rans
    divLoop.innerHTML = iterand;
    // if (iterand % 3 == 0) {
    //     console.log("Beep");
    //     divLoop.innerText = "Beep";
    // }
}