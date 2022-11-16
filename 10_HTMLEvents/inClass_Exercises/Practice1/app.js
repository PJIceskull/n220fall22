// Variables
let buttons = document.getElementsByTagName("button"); //
let rock_ID = document.getElementById("rock_ID"); //
let paper_ID = document.getElementById("paper_ID"); //
let scissors_ID = document.getElementById("scissors_ID"); //
printResult = document.getElementById("printResult");

let moves = ["Rock", "Paper", "Scissors"]; // Possible moves that are playable
let moveOutcomes = ["Win", "Tie", "Lose"]; // Arrays that holds possible win outcomes


for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#fff";
    buttons[i].style.color = "#000";
}

function playMove(event) { }