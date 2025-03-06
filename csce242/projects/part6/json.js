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
// Confirm script is running
console.log("Script is running... attempting to fetch bay data.");

// Function to fetch bay data from the JSON file
const getBay = async () => {
    const url = "https://fosternicodin12.github.io/csce242/json/bays.json";

    try {
        console.log("Fetching data from:", url);
        
        const response = await fetch(url).catch(error => {
            console.error("Network error:", error);
        });

        if (!response || !response.ok) {
            throw new Error(`HTTP error! Status: ${response ? response.status : "No Response"}`);
        }

        const bays = await response.json();
        console.log("Data successfully fetched:", bays); // Log the fetched JSON

        return bays;
    } catch (error) {
        console.error("Error fetching bays:", error);
        return [];
    }
};

// Function to create HTML elements dynamically based on bay data
const createBayHTML = (bay) => {
    let bayElement = document.createElement('div');
    bayElement.classList.add('section');
    
    // Check contents and create appropriate elements
    switch (bay.contents) {
        case 'rack':
            bayElement.classList.add('rack');
            break;
        case 'dock':
            bayElement.classList.add('dock');
            break;
        case 'office':
            bayElement.classList.add('office');
            break;
        case 'aisle':
            bayElement.classList.add('aisle');
            break;
        default:
            bayElement.classList.add('unknown');
            break;
    }

    // Set inner content based on the bay data
    bayElement.innerHTML = `
        <p>${bay.bay_number}</p>
        <p>ID: ${bay.container_number || "No container"}</p>
        ${bay.is_full ? "<p>Status: Full</p>" : "<p>Status: Empty</p>"}
        ${bay.company ? `<p>Company: ${bay.company}</p>` : ""}
    `;
    
    return bayElement;
};

// Function to log and display the bay data on the page
const logBays = async () => {
    console.log("Calling getBay()...");

    const bays = await getBay();

    if (bays.length === 0) {
        console.log("No bay data available.");
        return;
    }

    console.log("Bay Data:");
    console.log("------------------------");

    const container = document.getElementById("bay-container");

    bays.forEach(bay => {
        const bayElement = createBayHTML(bay);
        container.appendChild(bayElement);
    });
};

// Run the function to log and display the bay data
logBays();
