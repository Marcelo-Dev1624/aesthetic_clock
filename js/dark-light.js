// Define all variables needed to target DOM elements
const darkLightModeContainer = document.getElementById("darkLightModeContainer");
const buttons = document.querySelectorAll(".btn");
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const body = document.body;
const menu = document.getElementById("menu");
const nav = document.getElementById("navToggler");
let darkMode = false; // Initialize dark mode as true

// Check if dark mode is already set in local storage

  if (darkMode = localStorage.getItem("darkMode") === true) {
    // Apply light mode styles if it's set to false
    body.classList.remove("light-mode");
    menu.classList.remove("light-mode");
    nav.classList.remove("light-mode");
    darkLightModeContainer.classList.remove("light-mode");
    lightModeBtn.classList.remove("clicked");
    darkModeBtn.classList.add("clicked");

    localStorage.setItem("dakrMode", true);

  } else {
    // Apply dark mode styles if it's set to true
    body.classList.add("light-mode");
    menu.classList.add("light-mode");
    nav.classList.add("light-mode");
    darkLightModeContainer.classList.add("light-mode");
    darkModeBtn.classList.remove("clicked");
    lightModeBtn.classList.add("clicked");


    localStorage.setItem("darkMode", false);

  }

// Event listener for the mode switcher that toggles the desired styles
darkModeBtn.addEventListener("click", () => {
  if (lightModeBtn.classList.contains("clicked")) {
    lightModeBtn.classList.remove("clicked");
    darkModeBtn.classList.remove("light-mode");
  }

  body.classList.remove("light-mode");
  menu.classList.remove("light-mode");
  nav.classList.remove("light-mode");
  darkLightModeContainer.classList.remove("light-mode");

  darkModeBtn.classList.add("clicked");
  buttons.classList.remove("light-mode");

  darkMode = true;

  localStorage.setItem("darkMode", true);
});

lightModeBtn.addEventListener("click", () => {
  if (darkModeBtn.classList.contains("clicked")) {
    darkModeBtn.classList.remove("clicked");
    darkModeBtn.classList.add("light-mode");
  }

  body.classList.add("light-mode");
  menu.classList.add("light-mode");
  nav.classList.add("light-mode");
  darkLightModeContainer.classList.add("light-mode");

  lightModeBtn.classList.add("clicked");

  darkMode = false;
  localStorage.setItem("darkMode", false);
});

nav.addEventListener('click', () => {
  nav.classList.toggle('opened');
  if(menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
  }
  else{
    menu.classList.add("hidden");
  }
});