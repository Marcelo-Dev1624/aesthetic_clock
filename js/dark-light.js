// Define all variables needed to target DOM elements
const darkLightModeContainer = document.getElementById(
  "darkLightModeContainer"
);
const buttons = document.querySelectorAll(".btn");
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const body = document.body;
const menu = document.getElementById("menu");
const nav = document.getElementById("navToggler");
let darkMode = false; // Initialize dark mode as true

const metaThemeColor = document.querySelector("meta[name=theme-color");
const darkColor = "#030303";
const lightColor = "#e2e2e2";

const metaAppleStatusBar = document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]');


// Check if dark mode is already set in local storage

if ((darkMode = localStorage.getItem("darkMode") === "false")) {
  // Apply light mode styles if it's set to false
  body.classList.add("light-mode");
  menu.classList.add("light-mode");
  nav.classList.add("light-mode");
  darkLightModeContainer.classList.add("light-mode");
  lightModeBtn.classList.add("clicked");
  darkModeBtn.classList.remove("clicked");
  metaThemeColor.setAttribute('content', lightColor);
  metaAppleStatusBar.setAttribute('content', lightColor);

  localStorage.setItem("darkMode", false);
} else {
  // Apply dark mode styles if it's set to true
  body.classList.remove("light-mode");
  menu.classList.remove("light-mode");
  nav.classList.remove("light-mode");
  darkLightModeContainer.classList.remove("light-mode");
  darkModeBtn.classList.add("clicked");
  lightModeBtn.classList.remove("clicked");
  metaThemeColor.setAttribute('content', darkColor);
  metaAppleStatusBar.setAttribute('content', darkColor);

  localStorage.setItem("darkMode", true);
}

// Event listener for the mode switcher that toggles the desired styles
darkModeBtn.addEventListener("click", () => {
  if (lightModeBtn.classList.contains("clicked")) {
    lightModeBtn.classList.remove("clicked");
    darkModeBtn.classList.remove("light-mode");
    
    //if the validation is true, that means darkmode is off,
    //so property is set to true
    darkMode = true;
    localStorage.setItem("darkMode", true);
  }
  metaAppleStatusBar.setAttribute('content', darkColor);
  metaThemeColor.setAttribute('content', darkColor);
  body.classList.remove("light-mode");
  menu.classList.remove("light-mode");
  nav.classList.remove("light-mode");
  darkLightModeContainer.classList.remove("light-mode");

  darkModeBtn.classList.add("clicked");
  buttons.classList.remove("light-mode");
});

lightModeBtn.addEventListener("click", () => {
  if (darkModeBtn.classList.contains("clicked")) {
    darkModeBtn.classList.remove("clicked");
    darkModeBtn.classList.add("light-mode");
    //if the validation is true, that means darkmode is on,
    //so property is set to false
    darkMode = false;
    localStorage.setItem("darkMode", false);
  }
  metaAppleStatusBar.setAttribute('content', lightColor);
  metaThemeColor.setAttribute('content', lightColor);
  body.classList.add("light-mode");
  menu.classList.add("light-mode");
  nav.classList.add("light-mode");
  darkLightModeContainer.classList.add("light-mode");

  lightModeBtn.classList.add("clicked");
});

nav.addEventListener("click", () => {
  nav.classList.toggle("opened");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
