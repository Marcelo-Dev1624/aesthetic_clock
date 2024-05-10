const darkLightModeBlock = document.getElementById('darkLightMode');

darkLightModeBlock.addEventListener("mousemove", () =>{
    darkLightModeBlock.style.opacity = "0.03";
    setInterval(darkLightModeBlock, 20000);
    darkLightModeBlock.style.opacity ="1";
})

darkLightModeBlock.addEventListener("mouseleave", () =>{
    setInterval(darkLightModeBlock, 20000);
    darkLightModeBlock.style.opacity =".03";
})