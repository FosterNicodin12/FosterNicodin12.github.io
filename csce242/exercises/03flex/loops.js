document.getElementById("btn-display").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hey";
}

document.getElementById("btn-display").onclick = () => {
    const start = document.getElementById("txt-start").value;
    const end = document.getElementById("txt-end").value;
    const errorDisplay = document.getElementById("error-num-order")
    errorDisplay.innerHTML = " ";
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = " ";
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = " ";

    if (parseInt(start) > parseInt(end)) {
        errorDisplay.innerHTML = `${end} is less than ${start}`;
        return;
    }

    for (let i = start; i <= end; i++ ) {
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);

        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`;
        }

    }


}

let count = 0;
let updateCount;
const toys = ["car", "dinosaur", "blocks","legos","ball"];


document.querySelector("#btn-count").onclick = (event) => {

    if(event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop"

        updateCount = setInterval(() =>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        },100);

    }
    else {
        event.currentTarget.innerHTML = "Start"

        clearInterval(updateCount);
    }
}

document.querySelector("#btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = " ";
}

document.querySelector("#btn-toys").onclick = () => {

    toys.forEach((toy)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        ultoys.append(li);
    });

}

document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = [];
    toys["car"] = "An item to roll";
    toys["dinosaur"] = "An item to roar";
    toys["blocks"] = "An item to build";
    toys["legos"] = "An item to step on";
    toys["ball"] = "An item to throw";
    const section = document.getElementById("display-toy-descs");


    for(let toy in toys) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = (`${toy}: ${toys[toy]}`);
        p.onclick = () => {
            document.getElementById("toy-message").innerHTML = `Best ${toy} ever. ${toys[toy]}`;
        }
    }
}