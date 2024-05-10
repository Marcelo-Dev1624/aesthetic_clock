// Get the button element
const darkLightModeBlock = document.getElementById('darkLightMode');

// Add an event listener for the 'mousemove' event
// When the button detects some mouse move on top, set its opacity to 1
darkLightModeBlock.addEventListener("mousemove", () => {
    darkLightModeBlock.style.opacity = "1";
});

// Add an event listener for the 'touchstart' event
// When the button is touched, set its opacity to 1
darkLightModeBlock.addEventListener("touchstart", () => {
    darkLightModeBlock.style.opacity = "1";
});

// Add an event listener for the 'mouseleave' event
// When the mouse leaves the button, wait for 3 seconds and then set its opacity to 0.03
darkLightModeBlock.addEventListener("mouseleave", () => {
    setTimeout(() => {
        darkLightModeBlock.style.opacity = "0.03";
    }, 3000);
});

// Add an event listener for the 'touchend' event
// When the touch on the button ends, wait for 3 seconds and then set its opacity to 0.03
darkLightModeBlock.addEventListener("touchend", () => {
    setTimeout(() => {
        darkLightModeBlock.style.opacity = "0.03";
    }, 3000);
});