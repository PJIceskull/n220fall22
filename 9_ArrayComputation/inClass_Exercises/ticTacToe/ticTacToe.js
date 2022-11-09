// Variables
let gridLetters = [ // 2 dimensional array
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["O", "O", "X"]
];
let tttBoard = document.getElementById("tttBoard");

tttBoard.style.fontSize = 32 + "px";

tttBoard.innerHTML = gridLetters[0];
tttBoard.innerHTML = gridLetters[1];
tttBoard.innerHTML = gridLetters[2];

// Use Loop to print out Letters
for (i = 0; i < gridLetters.length; i++) {
    console.log(gridLetters[i]);
    tttBoard.innerHTML = gridLetters[1];

}




console.log(gridLetters.length);