document.getElementById("btn-hello").onclick = () => {
    const addHello = document.getElementById("addhello");
    addHello.innerHTML += "Hello<br>";
};

document.getElementById("colorpick").addEventListener("input", (event) => {
    const star = document.querySelector("#star");
    const color = event.target.value;
    document.documentElement.style.setProperty("--star-color", color);
});

document.getElementById("colorpick").addEventListener("input", (event) => {
    const color = event.target.value;
    document.documentElement.setAttribute("color", `--star-color: ${color};`);
});

document.getElementById("btn-change").onclick = () => {
    const firstImage = document.getElementById("first");
    const secondImage = document.getElementById("second");

    if (firstImage.style.display !== "none") {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
    } else {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    // Function to change heart color
    const changeHeartColor = (event) => {
        const heart = document.querySelector(".heart-shape");
        const newColor = event.target.value; // Get the color from the button's value
        heart.style.backgroundColor = newColor; // Change the background color of the heart
        heart.style.setProperty("--heart-color", newColor); // Change the color for pseudo-elements as well
    };

    // Add event listeners to all color buttons
    document.querySelectorAll("#buttons button").forEach(button => {
        button.addEventListener("click", changeHeartColor);
    });
});

