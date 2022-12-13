// Variable
let colorPreview = document.getElementById("colorPreview");
let currentColor = document.getElementById("currentColor");
const buttons = document.querySelectorAll("button");
let colorValueNum = 0;
let increaseValue = 0;
// GEt Attribute
// let increaseValue = buttons.getAttribute("data-increaseVal");
// console.log(increaseValue);

for (i = 0; i < buttons.length; i++) {
    // console.log(buttons[i]);
    let increaseValue = buttons[i].getAttribute("data-increaseVal");
    console.log(increaseValue);
    buttons[i].addEventListener("click", addValueNum(increaseValue));
}

function addValueNum(event) {
    // selectedButton = event.target;
    // console.log(selectedButton);

    // Calucate Color
    colorValueNum = event + colorValueNum;

    colorPreview.style.backgroundColor = rgb(colorValueNum, colorValueNum, colorValueNum);
    // currentColor.style.color = "rgb(0,0,0)"
    currentColor.innerHTML = "Current Color: rgb(" + colorValueNum + ", " + colorValueNum + ", " + colorValueNum + ")";
}

function rgb(r, g, b) {
    r = r + colorValueNum;
    g = g + colorValueNum;
    b = b + colorValueNum;
}