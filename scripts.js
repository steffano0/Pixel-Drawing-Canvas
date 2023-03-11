let columns = 16;
let rows = 16;
let canvas = document.querySelector(".canvas")

for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < rows; j++) {
        let row = document.createElement("div");
        row.className = "row";
        column.appendChild(row);

    }
    canvas.appendChild(column);
}

let ismouseDown = false

function changeColor () {
    if (ismouseDown) {
        this.classList.add("change")
    }
}



const pixels = Array.from(document.querySelectorAll(".row"));
pixels.forEach(pixel => pixel.addEventListener("mousemove", changeColor));
pixels.forEach(pixel => pixel.addEventListener("mousedown", () => {
    ismouseDown = true
}));
pixels.forEach(pixel => pixel.addEventListener("mouseup", () => {
    ismouseDown = false
}));

