// Variables
let colors = ["#18206f", "#17255A", "#F5E2C8", "#D88373", "#BD1E1E", "red", "purple"];

// for(var i = 0; i < colors.length; i++) {
for (var i = 0; i < 6; i++) {
    let aDiv = document.createElement("div");
    aDiv.innerHTML = colors[i];
    aDiv.style.width = "100px";
    aDiv.style.height = "100px";
    aDiv.style.backgroundColor = colors[i];
    document.body.appendChild(aDiv);
}