// Associative array (object) with titles as keys and image paths as values
const clownImages = {
    "Happy Birthday": "images/birthday.jpg",
    "Crazy Clown": "images/clown.jpg",
    "It's Raining": "images/rain.jpg",
    "Quiet Time": "images/read.jpg",
    "Working Hard": "images/shovel.jpg",
    "Work from Home": "images/work.jpg"
};

document.addEventListener("DOMContentLoaded", function() {
    const clowns = document.getElementById("clownaround");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupImage = document.getElementById("popupImage");
    const closeButton = document.querySelector(".close-btn");

    // Loop through the associative array and create list items
    for (const title in clownImages) {
        let listItem = document.createElement("li");
        listItem.textContent = title;

        // Add click event to show corresponding image
        listItem.addEventListener("click", () => {
            popupTitle.textContent = title;
            popupImage.src = clownImages[title];
            popup.style.display = "block"; // Show popup
        });

        // Append the list item to the unordered list
        clowns.appendChild(listItem);
    }
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the popup
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
