const exercise1 = () => {
    let e1Image = document.getElementById("command-image");
    const userInput = document.getElementById("transtype").value.toLowerCase();  // Get user input and make it lowercase for case-insensitive matching

    // Check if user input matches any of the transportation modes
    if (userInput == "bike") {
        e1Image.src = "images/biker.png";
    }
    else if (userInput == "car") {
        e1Image.src = "images/car.jpg";
    }
    else if (userInput == "scooter") {
        e1Image.src = "images/scooter.jpg";
    }
    else if (userInput == 'skateboard') {
        e1Image.src = "images/skateboard.png";
    }
    else {
        e1Image.src = "";
    }
};

// Add an event listener to trigger the function when the user types something
document.getElementById("transtype").addEventListener("input", exercise1);

const toggleSections = (e) => {
    // Get the elements to show/hide
    const travelSection = document.getElementById("travel");
    const heartSection = document.getElementById("heartcolor");

    // Check which button was clicked and toggle visibility accordingly
    if (e.target.id == "e1-btn" || e.target.id == "e1-btn-hbmenu") {
        travelSection.style.display = "block";  // Show the travel section
        heartSection.style.display = "none";    // Hide the heart color section
    } else if (e.target.id == "e2-btn" || e.target.id == "e2-btn-hbmenu") {
        travelSection.style.display = "none";   // Hide the travel section
        heartSection.style.display = "block";   // Show the heart color section
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Select the heart element
    const heart = document.querySelector(".heart-shape");

    // Select the buttons
    const redButton = document.getElementById("red-btn");
    const greenButton = document.getElementById("green-btn");
    const blueButton = document.getElementById("blue-btn");

    // Function to change heart color based on which button is clicked
    function changeHeartColor(color) {
        document.documentElement.style.setProperty("--heart-color", color);
    }

    // Add event listeners for each button with if conditions
    redButton.addEventListener("click", function () {
        if (redButton) {
            changeHeartColor("red");
        }
    });

    greenButton.addEventListener("click", function () {
        if (greenButton) {
            changeHeartColor("green");
        }
    });

    blueButton.addEventListener("click", function () {
        if (blueButton) {
            changeHeartColor("blue");
        }
    });
});
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};
function toggleMenu() {
    var menu = document.getElementById('menu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  }

// Add event listeners to the buttons
document.getElementById("e1-btn").addEventListener("click", toggleSections);
document.getElementById("e2-btn").addEventListener("click", toggleSections);
document.getElementById("e1-btn-hbmenu").addEventListener("click", toggleSections);
document.getElementById("e2-btn-hbmenu").addEventListener("click", toggleSections);

