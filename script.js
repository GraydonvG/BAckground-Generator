// Global variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color1Default = document.querySelector(".color1").defaultValue;
var color2Default = document.querySelector(".color2").defaultValue;

// Default background on load
document.onload = backgroundDefualt();

function backgroundDefualt() {
  body.style.background = "linear-gradient(to right, " + color1Default + ", " + color2Default + ")";
}

// Display the initial CSS linear gradient property on page load
document.onload = DisplayInitialCSS();

function DisplayInitialCSS() {
  css.textContent = body.style.background + ";";
}

// Custom background generator
color1.addEventListener("input", background);
color2.addEventListener("input", background);

function background() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  // Display the CSS linear gradient property selected
  css.textContent = body.style.background + ";";
}

// Random color generator
var randomBtn = document.getElementById("random");
var arrayOfColorFunctions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function randomColor() {
  var randomColorString1 = "#";
  var randomColorString2 = "#";
  for (var x = 0; x < 6; x++) {
    var index = Math.floor(Math.random() * 16);
    var value = arrayOfColorFunctions[index];
    randomColorString1 += value;
  }
  for (var x = 0; x < 6; x++) {
    var index = Math.floor(Math.random() * 16);
    var value = arrayOfColorFunctions[index];
    randomColorString2 += value;
  }
  randomBackground(randomColorString1, randomColorString2);
}

function randomBackground(random1, random2) {
  body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";

  // Set input type color value
  color1.value = random1;
  color2.value = random2;

  // Display the CSS linear gradient property selected
  css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", randomColor);
