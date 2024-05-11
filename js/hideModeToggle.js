// Get the button element
const darkLightModeContainer = document.getElementById('darkLightModeContainer');
const navToggler = document.getElementById('navToggler');

// Add an event listener for the 'mousemove' event
// When the button detects some mouse move on top, set its opacity to 1
navToggler.addEventListener("mousemove", () => {
    darkLightModeBlock.style.opacity = "1";
});

// Add an event listener for the 'touchstart' event
// When the button is touched, set its opacity to 1
navToggler.addEventListener("touchstart", () => {
    darkLightModeBlock.style.opacity = "1";
});

// Add an event listener for the 'mouseleave' event
// When the mouse leaves the button, wait for 3 seconds and then set its opacity to 0.03
navToggler.addEventListener("mouseleave", () => {
    setTimeout(() => {
        darkLightModeBlock.style.opacity = "0.03";
    }, 3000);
});

// Add an event listener for the 'touchend' event
// When the touch on the button ends, wait for 3 seconds and then set its opacity to 0.03
navToggler.addEventListener("touchend", () => {
    setTimeout(() => {
        darkLightModeBlock.style.opacity = "0.03";
    }, 3000);
});