document.getElementById("showladder").onclick = () => {
    let ladder = document.getElementById("ladder");
    let stickFigure = document.getElementById("right"); // The stick figure image
    let isRightStep = true; // Track whether it's right or left step
    let maxHeight = 375;
    let currentPosition = -150; // Starting position (in px)

    // Show the ladder
    ladder.classList.remove("hidden");

    // Start switching images after 0.5 seconds
    setTimeout(() => {
        setInterval(() => {
            if (currentPosition >= maxHeight) {
                clearInterval(interval); // Stop the interval once the figure reaches the top
                return; // Break the function completely
            }
            if (isRightStep) {
                stickFigure.src = "images/left.png";
            } else {
                stickFigure.src = "images/right.png";
            }
            isRightStep = !isRightStep; // Toggle step
            if (currentPosition < maxHeight) {
                currentPosition += 50;
                stickFigure.style.bottom = `${currentPosition}px`;
            }
        }, 500); // Switch every 0.5 seconds (500ms)
    }, 500);
};