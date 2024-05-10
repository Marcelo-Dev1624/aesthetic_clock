//create a dark-light mode switch for the existing code
// 1. Create a button in the HTML file with id="switch" and onclick function to toggle the dark and light mode

const switchButton = document.getElementById('mode-switch');
const switchButtonBall = document.getElementById('switch-ball');
const body = document.body;
let darkMode=false;

sessionStorage.setItem("light-mode", true);

switchButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    switchButton.classList.toggle('light-mode');
    switchButtonBall.classList.toggle('light-mode');
    sessionStorage.getItem("light-mode");
});


// 2. Create a CSS class for dark mode and light mode, apply it to the body of your HTML page
// 3. Use JavaScript to add an event listener to the button, so when it is clicked, it toggles the dark and light mode