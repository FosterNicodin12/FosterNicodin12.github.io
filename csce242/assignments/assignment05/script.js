document.getElementById("btn-hello").onclick = () => {
    const addHello = document.getElementById("addhello");
    addHello.innerHTML += "Hello<br>";
};

document.getElementById("colorpick").addEventListener("input", (event) => {
    const star = document.querySelector("#star");
    const color = event.target.value;
    document.documentElement.style.setProperty("--star-color", color);
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

