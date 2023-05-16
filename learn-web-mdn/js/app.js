//window.alert("welcome to ctg world")

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
    if(name = null)
    {
        document.getElementById("playerid").innerHTML = "Chris";

    }
    else {
        const name = prompt("Enter a new name");
        para.textContent = `Player 1: ${name}`;
    }
}