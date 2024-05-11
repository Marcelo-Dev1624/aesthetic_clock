// Get the button element
const navToggler = document.getElementById("navToggler");

// Add an event listener for the 'mousemove' event
// When the button detects some mouse move on top, set its opacity to 1
navToggler.addEventListener("mousemove", () => {
  navToggler.style.opacity = "1";


  // Add an event listener for the 'mouseleave' event
// When the mouse leaves the button, wait for 3 seconds and then set its opacity to 0.2
  navToggler.addEventListener("mouseleave", () => {
    if (navToggler.classList.contains("opened")) {
      navToggler.style.opacity = "1";
    } else {
      setTimeout(() => {
        navToggler.style.opacity = "0.2";
      }, 3000);
    }
  });
});

// Add an event listener for the 'touchstart' event
// When the button is touched, set its opacity to 1
navToggler.addEventListener("touchstart", () => {

    // Add an event listener for the 'touchend' event
// When the touch on the button ends, wait for 3 seconds and then set its opacity to 0.2
  navToggler.addEventListener("touchend", () => {
    if (navToggler.classList.contains("opened")) {
      navToggler.style.opacity = "1";
    } else {
      setTimeout(() => {
        navToggler.style.opacity = "0.2";
      }, 3000);
    }
  });
  navToggler.style.opacity = "1";
});




