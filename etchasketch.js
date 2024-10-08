let etchasketch = document.querySelector(".container");

function createGrid(boxNumber) {
    for (let counter = 0; counter < (boxNumber * boxNumber); counter++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", darken);
        console.log("div created: " + counter);
        div.setAttribute("style", "background-color:hsl(0, 0%, 95%); box-sizing:border-box; border:solid black 1px; flex: 1 0 " + (100 / boxNumber) + "%;")
        etchasketch.appendChild(div);
    };
}

function darken(event) {
    let cellColor = this.style.backgroundColor;
    let darkenAmount = 25;

    // Slices cellColor to extract single RGB value (242 to start)
    cellColor = cellColor.slice(4, 7);

    // Repeat slice for only two characters once RGB value is below 100
    if (!Number(cellColor)) {
        cellColor = this.style.backgroundColor;
        cellColor = cellColor.slice(4, 6);
    }

    // Subtracts darkenAmount from RGB value
    cellColor -= darkenAmount;

    this.style.backgroundColor = "rgb(" + cellColor +
        ", " + cellColor +
        ", " + cellColor + ")";

    event.stopPropagation();
}

// RESET CANVAS
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", reset)

function reset () {
    let boxNumber = getUserBoxNumber();
    resetCanvas();
    console.log(boxNumber);
    createGrid(boxNumber);
}

function getUserBoxNumber() {
    let boxNumber = 0;
    do {
        boxNumber = parseInt(prompt("How many squares would you like per side? (Max 100)"));
    } while (isNaN(boxNumber) || boxNumber <= 0 || boxNumber > 100);

    return boxNumber;
}

function resetCanvas() {
    while (etchasketch.firstChild) {
        etchasketch.removeChild(etchasketch.lastChild);
    }
}

createGrid(16);


