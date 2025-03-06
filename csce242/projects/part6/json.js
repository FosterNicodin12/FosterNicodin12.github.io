// const getBay = async () => {
//     const url = "https://fosternicodin12.github.io/csce242/json/bays.json";

//     try {
//         const response = await fetch(url);
//         return response.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

// const showBays = async () => {
//     const baysections = document.getElementById("bay"); // Ensure this ID exists in your HTML
//     const bays = await getBay();
    
//     bays.forEach(bay => {
//         const section = document.createElement("section");
//         section.classList.add("bay");
//         baysections.appendChild(section);

//         const h3 = document.createElement("h3");
//         h3.textContent = `Bay: ${bay.bay_number}`;
//         section.appendChild(h3);

//         const company = document.createElement("p");
//         company.textContent = `Company: ${bay.company}`;
//         section.appendChild(company);

//         const container = document.createElement("p");
//         container.textContent = `Container Number: ${bay.container_number || "N/A"}`;
//         section.appendChild(container);

//         const status = document.createElement("p");
//         status.textContent = bay.is_full ? "Status: Full" : "Status: Empty";
//         section.appendChild(status);

//         if (bay.picture) {
//             const img = document.createElement("img");
//             img.src = bay.picture;
//             img.alt = `Image of bay ${bay.bay_number}`;
//             img.style.width = "100px";
//             section.appendChild(img);
//         }
//     });
// };

// showBays();

// Function to fetch bay data from the JSON file
// Confirm script is running
console.log("Script is running... attempting to fetch bay data.");

// Function to fetch bay data from the JSON file
const getBay = async () => {
    const url = "https://fosternicodin12.github.io/csce242/json/bays.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

// Function to update the warehouse layout in HTML
const displayBays = async () => {
    console.log("Updating warehouse layout...");

    const bays = await getBay();
    if (bays.length === 0) {
        console.log("No bay data available.");
        return;
    }

    const warehouse = document.querySelector(".warehouse");
    if (!warehouse) {
        console.error("Warehouse container not found in HTML.");
        return;
    }

    warehouse.innerHTML = "";
    bays.forEach(bay => {
        const section = document.createElement("div");
        section.classList.add("rack", "section");

        section.innerHTML = `<p>${bay.bay_number}<br>ID: ${bay.container_number || "Empty"}</p>`;

        warehouse.appendChild(section);
    });

    console.log("Warehouse layout updated successfully.");
};

// Run the function to display the bay data
displayBays();
