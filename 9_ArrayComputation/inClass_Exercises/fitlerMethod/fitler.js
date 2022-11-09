// Fitler

// Variable
let coolThings = ["Plasma", "Robot", "Moon shoes", "Ice"];

for (let i = 0; i < coolThings.length; i++) {
    thing = coolThings[i];
}

// let result = coolThings.includes("Ice");//
let result = coolThings.filter(function (thing) {
    // return true;
    // return Math.random() > 5;
    return thing.length > 6;
});//

console.log(result);
console.log(coolThings);