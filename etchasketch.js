const etchasketch = document.querySelector(".container");

for (let counter = 0; counter < (256); counter++) {
    console.log("for loop");
    let div = document.createElement("div");
    div.addEventListener("mouseover", darken);
    console.log("div created: " + counter);
    div.setAttribute("style", "background-color:lightgrey; box-sizing:border-box; border:solid black 1px; flex:1 0 6.25%;")
    etchasketch.appendChild(div);
};

function darken(event) {
    this.style.backgroundColor = "black";
    event.stopPropagation();
}