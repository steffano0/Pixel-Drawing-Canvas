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

const pixels = Array.from(document.querySelectorAll(".row"));
pixels.forEach(pixel => pixel.addEventListener("mousemove", () => {
    pixel.classList.add("change");
}));

