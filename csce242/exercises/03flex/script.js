//do stuff when button is clicked
document.getElementById("feeling").onkeyup = (event) => {
    //const input = document.getElementById("feeling").value;
    document.getElementById("feelingtext").innerHTML = 
    "You are feeling ver " +event.currentTarget.value;
};