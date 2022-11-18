// Global variables
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const color1Default = document.querySelector(".color1").defaultValue;
const color2Default = document.querySelector(".color2").defaultValue;

// Default background on load
const backgroundDefualt = () =>
  (body.style.background = "linear-gradient(to right, " + color1Default + ", " + color2Default + ")");

document.onload = backgroundDefualt();

// Display the initial CSS linear gradient property on page load
const DisplayInitialCSS = () => (css.textContent = body.style.background + ";");

document.onload = DisplayInitialCSS();

// Custom background generator
function background() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  // Display the CSS linear gradient property selected
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", background);
color2.addEventListener("input", background);

// Random color generator
const randomBtn = document.getElementById("random");
const arrayOfColorFunctions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function randomColor() {
  let randomColorString2 = "#";
  let randomColorString1 = "#";
  for (let x = 0; x < 6; x++) {
    const index = Math.floor(Math.random() * 16);
    const value = arrayOfColorFunctions[index];
    randomColorString1 += value;
  }
  for (let x = 0; x < 6; x++) {
    const index = Math.floor(Math.random() * 16);
    const value = arrayOfColorFunctions[index];
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
