// Variables
let elText = document.getElementById("elTest");

elText.style.backgroundColor = "#000";
elText.style.color = "#FFcc3c";
elText.style.width = "300px";
// "300px" + 2 // "300px2"



function changeText() {
    elText.innerHTML = "COOL STORY DUDE!";
    elText.style.color = "#fff";
    elText.style.backgroundColor = "#00FFAA";
}