const etchasketch = document.querySelector(".container");

for (let counter = 0; counter < (16 * 16); counter++) {
    console.log("for loop");
    let div = document.createElement("div");
    console.log("div created: " + counter);
    if (counter % 2 === 0) {
        div.setAttribute("style", "background-color:white; flex:1 0 6.25%;")
    } else {
        div.setAttribute("style", "background-color:black; flex:1 0 6.25%;")
    }
    etchasketch.appendChild(div);
};