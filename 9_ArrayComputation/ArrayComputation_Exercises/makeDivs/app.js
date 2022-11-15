// Variables
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 }
];
let divContainer = document.getElementById("divContainer"); // Targert Element with Id, "DivContainer"
let makeDiv = document.createElement("div"); // Variable to create div tag.


console.log(divContainer); // Print to console the div tag



// For loop
for (i = 0; i < objects.length; i++) {
    console.log(objects[i]); // Print to Console the Array index in Objects

    // Create three divs inside of divContainer
    // makeDiv.innerHTML = objects[i];

    // Style the divs by selecting the objects properties
    makeDiv.innerText = "Hello";

    makeDiv.style.backgroundColor = objects[i].color;
    makeDiv.style.height = objects[i].height + "px";
    makeDiv.style.width = objects[i].width + "px";
    // Append Div to divContainer
    divContainer.appendChild(makeDiv);

}

