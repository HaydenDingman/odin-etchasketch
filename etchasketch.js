const etchasketch = document.querySelector(".container");

for (let counter = 0; counter < (16 * 16); counter++) {
    console.log("for loop");
    let div = document.createElement("div");
    console.log("div created: " + counter);
    div.setAttribute("style", "background-color:lightgrey; box-sizing:border-box; border:solid black 1px; flex:1 0 6.25%;")
    etchasketch.appendChild(div);
};