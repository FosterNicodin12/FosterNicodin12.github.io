document.getElementById("showladder").onclick = () => {
    let ladder = document.getElementById("ladder");
    let stickFigure = document.getElementById("right");
    let isRightStep = true;
    const maxHeight = 425;
    let currentPosition = -50;

    ladder.classList.remove("hidden");

    
    setTimeout(() => {
        const interval = setInterval(() => {
            if (currentPosition >= maxHeight) {
                clearInterval(interval);
                return;
            }
            stickFigure.src = isRightStep ? "images/left.png" : "images/right.png";
            isRightStep = !isRightStep;
            if (currentPosition < maxHeight) {
                currentPosition += 50;
                stickFigure.style.bottom = `${currentPosition}px`;
            }
        }, 500);
    }, 500);
};