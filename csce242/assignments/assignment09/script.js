// Define Pizza class
class Pizza {
    constructor(title, ingredients, sauce, cheese, price, pic, location) {
      this.title = title;
      this.ingredients = ingredients;
      this.sauce = sauce;
      this.cheese = cheese;
      this.price = price;
      this.pic = pic;
    }
}

// Create an array of pizza objects
const pizzas = [];
pizzas.push(new Pizza("Pepperoni Pizza", "Pepperoni, mozzarella, tomato sauce, dough", "Tomato Sauce", "Mozzarella, Parmesan", "$12.99", "images/pepperonipizza.jpeg"));
pizzas.push(new Pizza("Cheese Pizza", "Mozzarella, parmesan, tomato sauce, dough", "Tomato Sauce", "Mozzarella, Parmesan", "$11.99", "images/cheesepizza.jpg"));
pizzas.push(new Pizza("Margherita Pizza", "Fresh basil, mozzarella, tomatoes, olive oil", "Tomato Sauce", "Fresh Mozzarella", "$11.99", "images/margpizza.jpeg"));
pizzas.push(new Pizza("Buffalo Chicken Pizza", "Grilled chicken, buffalo sauce, red onions, mozzarella", "Buffalo Sauce", "Mozzarella", "$13.99", "images/buffalochicken.jpeg"));
pizzas.push(new Pizza("Veggie Pizza", "Bell peppers, mushrooms, onions, olives, mozzarella", "Tomato Sauce", "Mozzarella", "$13.00", "images/veggiepizza.jpeg"));

document.addEventListener("DOMContentLoaded", () => {
    const pizzaContainer = document.getElementById("pizza-container");

    pizzas.forEach(pizza => {
        const pizzaSection = document.createElement("section");
        pizzaSection.classList.add("columns", "slice");

        const pizzaTitle = document.createElement("h3");
        pizzaTitle.textContent = pizza.title;

        const pizzaImage = document.createElement("img");
        pizzaImage.src = pizza.pic;
        pizzaImage.alt = pizza.title;
        
        pizzaSection.appendChild(pizzaTitle);
        pizzaSection.appendChild(pizzaImage);

        pizzaContainer.appendChild(pizzaSection);

});
});
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("putitle");
    const popupIngredients = document.getElementById("puingredients");
    const popupSauce = document.getElementById("pusauce");
    const popupCheese = document.getElementById("pucheese");
    const popupPrice = document.getElementById("puprice");
    const popupImage = document.getElementById("popup-image");

    // Event listener for pizza click
    document.querySelectorAll(".pizza section").forEach((slice) => {
        slice.onclick = () => {
            const label = slice.querySelector("h3").innerHTML;
            const imgSRC = slice.querySelector("img").src;

            const clickedPizza = pizzas.find(pizza => pizza.title == label);

            console.log("Clicked pizza", clickedPizza)
            if (clickedPizza) {
                document.querySelector("#popup h2").innerHTML = clickedPizza.title;
                document.querySelector("#puingredients").innerHTML = `<strong>Ingredients:</strong> ${clickedPizza.ingredients}`;
                document.querySelector("#pusauce").innerHTML = `<strong>Sauce: </strong>${clickedPizza.sauce}`;
                document.querySelector("#pucheese").innerHTML = `<strong>Cheese:</strong> ${clickedPizza.sauce}`;
                document.querySelector("#puprice").innerHTML = `<strong>Price:</strong> ${clickedPizza.price}`;
                document.querySelector("#puimg").src = clickedPizza.pic;
                /*
                document.querySelector("puingredients").innerHTML += clickedPizza.ingredients;
                popupTitle.textContent = clickedPizza.title;
                popupIngredients.textContent = `Ingredients: ${clickedPizza.ingredients}`;
                popupSauce.textContent = `Sauce: ${clickedPizza.sauce}`;
                popupCheese.textContent = `Cheese: ${clickedPizza.cheese}`;
                popupPrice.textContent = `Price: ${clickedPizza.price}`;
                popupImage.src = clickedPizza.pic;
                */

                // Show the popup
                popup.style.display = "block";
            } else {
                console.error("Pizza not found for label:", label);
            }
            // Show the popup
            popup.style.display = "block";
        };
    });
});


/*
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("putitle");
    const popupIngredients = document.getElementById("puingredients");
    const popupSauce = document.getElementById("pusauce");
    const popupCheese = document.getElementById("pucheese");
    const popupPrice = document.getElementById("puprice");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.querySelector(".w3-button");
});

document.querySelectorAll(".pizza section").forEach((slice)=>{
    slice.onclick = () => {
        const label = slice.querySelector("h3").innerHTML;
        const imgSRC = slice.querySelector("img").src;
        document.getElementById("popup").style.display="block";
        document.querySelector("#popup h2").innerHTML = label;
        document.querySelector("#popup img").src = imgSRC;
        modalContent.append(this.paragraph("Type", this.type));
        modalContent.append(this.paragraph("Height", this.height));
        modalContent.append(this.paragraph("Age", this.age));
        modalContent.append(this.paragraph("Location", this.location));
    }
});
*/
