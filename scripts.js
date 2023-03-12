let columns = 16;
let rows = 16;
let canvas = document.querySelector("#canvas")

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
        this.style.backgroundColor = "black"
    }
}

function clearCanvas() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");

}

function draw () {
    pixels.forEach(pixel => pixel.addEventListener("mousemove", changeColor));
    pixels.forEach(pixel => pixel.addEventListener("mousedown", () => {
        ismouseDown = true
    }));
    pixels.forEach(pixel => pixel.addEventListener("mouseup", () => {
        ismouseDown = false
    }));
    
}
const pixels = Array.from(document.querySelectorAll(".row"));
const clear = document.querySelector(".btn-clear");
const pencil = document.querySelector(".btn-pencil");
const eraser = document.querySelector(".btn-eraser");
clear.addEventListener("click", clearCanvas);
pencil.addEventListener("click", draw);



